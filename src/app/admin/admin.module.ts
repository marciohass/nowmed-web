import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { InstitutiontypeComponent } from './institutiontype/institutiontype.component';
import { InstitutiontypesFormComponent } from './institution-types/institutiontypes-form/institutiontypes-form.component';
import { InstitutiontypesListComponent } from './institution-types/institutiontypes-list/institutiontypes-list.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    InstitutiontypeComponent,
    InstitutiontypesFormComponent,
    InstitutiontypesListComponent
  ],
  exports: [AdminComponent]
})
export class AdminModule { }
