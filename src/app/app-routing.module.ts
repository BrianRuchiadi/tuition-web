import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import PlainLayoutComponent from './components/layouts/plain/plain.component';
import LoginComponent from './components/pages/auth/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: PlainLayoutComponent,
    children: [{ path: 'login', component: LoginComponent, pathMatch: 'full'}]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
