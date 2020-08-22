import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import MainNavLayoutComponent from '@components/layouts/main-nav/main-nav.component';
import DashboardComponent from '@components/pages/dashboard/dashboard.component';
// import { AuthGuard } from '@guards/auth.guard';
// import { PermissionGuard } from '@guards/permission.guard';


const routes: Routes = [
  {
    path: '',
    component: MainNavLayoutComponent,
    // canActivate: [AuthGuard, PermissionGuard],
    data: {
      permissions: ['root.dashboard']
    },
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
