import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InstitutiontypesFormComponent } from './institutiontypes-form/institutiontypes-form.component';
import { InstitutiontypesListComponent } from './institutiontypes-list/institutiontypes-list.component';
import { InstitutionTypeRoutingModule } from './institutiontype-routing.module';


@NgModule({
  declarations: [InstitutiontypesListComponent, InstitutiontypesFormComponent],
  imports: [
    CommonModule,
    InstitutionTypeRoutingModule,
    ReactiveFormsModule
  ]
})
export class InstitutionTypeModule { }
