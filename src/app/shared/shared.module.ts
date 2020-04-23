import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AlertModalComponent, ConfirmModalComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AlertModalComponent
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent
  ]
})
export class SharedModule { }
