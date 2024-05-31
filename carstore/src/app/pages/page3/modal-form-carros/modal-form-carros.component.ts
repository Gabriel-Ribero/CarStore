import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarrosService } from '../../../services/carros.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Carros } from '../../../interfaces/carros';

@Component({
  selector: 'app-modal-form-carros',
  templateUrl: './modal-form-carros.component.html',
  styleUrl: './modal-form-carros.component.scss'
})
export class ModalFormCarrosComponent {
  formCarros!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModalFormCarrosComponent>,
    private formBuilder: FormBuilder,
    private carrosService: CarrosService) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formCarros = this.formBuilder.group({
      Km: [null, [Validators.required, Validators.minLength(4)]],
      Marca: [null, [Validators.required]],
      Modelo: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      valor: [null, [Validators.required]],
    });

    if (this.data && this.data.nome) {
      this.fillForm();
    }
  }

  fillForm() {
    this.formCarros.patchValue({
      Km: this.data.nome,
      Marca: this.data.codigo,
      Modelo: this.data.descricao,
      valor: this.data.valor,
    })
  }

  save() {
    const model: Carros = this.formCarros.getRawValue();

    if (this.data && this.data.nome) {
      this.carrosService.update(this.data.firebaseId, model)
        .then((response: any) => {
          window.alert('Carro alterado com sucesso.');
          this.closeModal();
        })
    }
    else {
      this.carrosService.create(model)
        .then((response: any) => {
          window.alert('Carro incluido com sucesso.');
          this.closeModal();
        })
    }

  }

  closeModal() { this.dialogRef.close(); }

}
