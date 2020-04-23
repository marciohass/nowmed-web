import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitutionTypeResolverGuard } from './guards/institutiontype-resolver.guard';
import { InstitutiontypesFormComponent } from './institutiontypes-form/institutiontypes-form.component';
import { InstitutiontypesListComponent } from './institutiontypes-list/institutiontypes-list.component';

const routes: Routes = [
  { path: '', component: InstitutiontypesListComponent },
  {
    path: 'novo', component: InstitutiontypesFormComponent,
    resolve: {
      institutiontype: InstitutionTypeResolverGuard
    }
  },
  {
    path: 'editar/:id', component: InstitutiontypesFormComponent,
    resolve: {
      institutiontype: InstitutionTypeResolverGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstitutionTypeRoutingModule { }
