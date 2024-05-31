import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PecasService } from '../../../services/pecas.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Pecas } from '../../../interfaces/pecas';

@Component({
  selector: 'app-model-form-peca',
  templateUrl: './model-form-peca.component.html',
  styleUrl: './model-form-peca.component.scss'
})
export class ModelFormPecaComponent {
  formPecas!: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ModelFormPecaComponent>,
    private formBuilder: FormBuilder,
    private pecasService: PecasService) {

  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.formPecas = this.formBuilder.group({
      nome: [null, [Validators.required, Validators.minLength(4)]],
      codigo: [null, [Validators.required]],
      descricao: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
      valor: [null, [Validators.required]],
    });

    if (this.data && this.data.nome) {
      this.fillForm();
    }
  }

  fillForm() {
    this.formPecas.patchValue({
      nome: this.data.nome,
      codigo: this.data.codigo,
      descricao: this.data.descricao,
      valor: this.data.valor,
    })
  }

  save() {
    const model: Pecas = this.formPecas.getRawValue();

    if (this.data && this.data.nome) {
      this.pecasService.update(this.data.firebaseId, model)
        .then((response: any) => {
          window.alert('Peça alterada com sucesso.');
          this.closeModal();
        })
    }
    else {
      this.pecasService.create(model)
        .then((response: any) => {
          window.alert('Peça incluida com sucesso.');
          this.closeModal();
        })
    }

  }

  closeModal() { this.dialogRef.close(); }
}
