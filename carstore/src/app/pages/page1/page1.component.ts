import { Component, ViewChild } from '@angular/core';

import { PecasService } from '../../services/pecas.service';
import { Pecas } from '../../interfaces/pecas';
import { ModelFormPecaComponent } from './model-form-peca/model-form-peca.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  //Formação e ordernação das colunas
  displayedColumns: string[] = ['codigo', 'nome', 'descricao', 'valor', 'actions'];

  dataSource: any;
  listPecas: Pecas[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private pecasService: PecasService, public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource<Pecas>(this.listPecas);
  }

  ngOnInit() {
    this.getListPecas();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListPecas() {
    this.pecasService.getAll().subscribe({
      next: (response: any) => {
        this.listPecas = response;
        this.dataSource = new MatTableDataSource<Pecas>(this.listPecas);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error: any) => {
        window.alert("Erro ao buscar as peças cadastradas.");
      }
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModalFormPeca() {
    this.dialog.open(ModelFormPecaComponent, {
      width: '700px',
      height: 'auto'
    }).afterClosed().subscribe(() => this.getListPecas());
  }

  openModalEditPeca(peca: Pecas) {
    this.dialog.open(ModelFormPecaComponent, {
      width: '700px',
      height: 'auto',
      data: peca
    }).afterClosed().subscribe(() => this.getListPecas());
  }

  deletePeca(firebaseId : string) {
    this.pecasService.delete(firebaseId)
      .then((response : any) => {
        window.alert("Peça excluida com sucesso.");
        this.getListPecas();
      });
  }

}
