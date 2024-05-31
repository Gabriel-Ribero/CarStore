import { Component, ViewChild } from '@angular/core';

import { CarrosService } from '../../services/carros.service';
import { Carros } from '../../interfaces/carros';
import { ModalFormCarrosComponent } from './modal-form-carros/modal-form-carros.component';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.scss'
})
export class Page3Component {
[x: string]: any;
openModalFormCarro() {
throw new Error('Method not implemented.');
}
  //Formação e ordernação das colunas
  displayedColumns: string[] = ['Km', 'Marca', 'Modelo', 'valor', 'actions'];

  dataSource: any;
  listCarros: Carros[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private carrosService: CarrosService, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource<Carros>(this.listCarros);
  }

  ngOnInit() {
    this.getListCarros();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getListCarros() {
    this.carrosService.getAll().subscribe({
      next: (response: any) => {
        this.listCarros = response;
        this.dataSource = new MatTableDataSource<Carros>(this.listCarros);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error: any) => {
        window.alert("Erro ao buscar as carros cadastradas.");
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

  openModalFormCarros() {
    this.dialog.open(ModalFormCarrosComponent, {
      width: '700px',
      height: 'auto'
    }).afterClosed().subscribe(() => this.getListCarros());
  }

  openModalEditCarro(carro: Carros) {
    this.dialog.open(ModalFormCarrosComponent, {
      width: '700px',
      height: 'auto',
      data: carro
    }).afterClosed().subscribe(() => this.getListCarros());
  }

  deleteCarro(firebaseId: string) {
    this.carrosService.delete(firebaseId)
      .then((response: any) => {
        window.alert("Carro excluida com sucesso.");
        this.getListCarros();
      });
  }


}
