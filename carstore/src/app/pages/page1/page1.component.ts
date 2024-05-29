import { Component, ViewChild } from '@angular/core';
import { Pecas } from '../../interfaces/pecas';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PecasService } from '../../services/pecas.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component {
  displayedColumns: string[] = ['id', 'nome', 'codigo', 'descricao', 'valor'];
  dataSource: any;
  listPecas: Pecas[] = [];

  /*@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;*/

  constructor(private pecasService: PecasService, public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource<Pecas>(this.listPecas);
  }

  ngOnInit() {
    this.getListPecas();
 }

  /*ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }*/

  getListPecas() {
    this.pecasService.getAll().subscribe({
      next: (response: any) => {
        console.log('Lista de peças no firebase', response);
        this.listPecas = response;

        this.dataSource = new MatTableDataSource<Pecas>(this.listPecas);

        /*this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;*/
      },
      error: (error: any) => {
        console.error('Erro ao buscar lista de pecas', error);
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

}
