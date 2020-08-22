import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

import { AuthModule } from './auth/index.module';
import { AppRoutingModule } from '../app-routing.module';
import { PlainLayoutComponent } from '@components/layouts/plain/plain.component';

@NgModule({
  declarations: [PlainLayoutComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AuthModule,
  ],
  exports: [AppRoutingModule],
  providers: []
})
export class CoreModule { }
