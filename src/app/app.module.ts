import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AplicationErrorHandle } from './app.error-handle';
import { AlertModalComponent } from './shared/alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './shared/confirm-modal/confirm-modal.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AdminModule,
    AuthModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: ErrorHandler, useClass: AplicationErrorHandle},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
