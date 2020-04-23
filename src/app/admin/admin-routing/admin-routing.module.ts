import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from './../admin.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AuthGuard } from './../../guards/auth.guard';
import { InstitutiontypeComponent } from './../institutiontype/institutiontype.component';


@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'dashboard1',
            pathMatch: 'full'
          },
          { path: 'dashboard1', component: AdminDashboard1Component },
          { path: 'institutiontype', component: InstitutiontypeComponent },
          {
            path: 'institution-types',
            loadChildren: () => import('./../institution-types/institution-type.module').then(m => m.InstitutionTypeModule)
          },
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
