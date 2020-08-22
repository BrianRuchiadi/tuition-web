import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './index-routing.module';
import MainNavLayoutComponent from '@components/layouts/main-nav/main-nav.component';
import DashboardComponent from '@components/pages/dashboard/dashboard.component';
// import SportsComponent from '@components/pages/dictionary/sports.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ],
  declarations: [
    MainNavLayoutComponent,
    DashboardComponent
  ],
})
export class DashboardModule { }
