import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InstitutionTypeService } from '../institution-type.service';
import { ActivatedRoute } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-institutiontypes-form',
  templateUrl: './institutiontypes-form.component.html',
  styleUrls: ['./institutiontypes-form.component.scss']
})
export class InstitutiontypesFormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: InstitutionTypeService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const institutiontypes = this.route.snapshot.data['institution-types'];
    console.log(institutiontypes);
    this.form = this.fb.group({
      id: [institutiontypes.id],
      description: [institutiontypes.description, [Validators.required, Validators.minLength(3), Validators.maxLength(255)]]
    });
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

  onSubmit() {

    this.submitted = true;
    console.log(this.form.value);

    if (this.form.valid) {
      console.log('submit');

      let msgSuccess = 'Tipo de instituição criada com sucesso!';
      let msgError = 'Erro ao criar tipo de instituição, tente novamente!';

      if (this.form.value.id) {
        msgSuccess = 'Tipo de instituição atualizada com sucesso!';
        msgError = 'Erro ao atualizar tipo de instituição, tente novamente!';
      }

      this.service.save(this.form.value).subscribe(
        success => {
          this.modal.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.modal.showAlertDanger(msgError),
      );
    }

  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
    // console.log('onCancel');
  }

}
