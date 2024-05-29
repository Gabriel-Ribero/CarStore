import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.scss'
})
export class CrudComponent {

}

openModalViewMateria() {
  constructor(private materiaService: MateriasService, public dialog: MatDialog) { 
    this.dataSource = new MatTableDataSource<Materia>(this.listMaterias);
  }
}