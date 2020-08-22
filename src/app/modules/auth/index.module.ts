import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { SharedModule } from 'src/app/modules/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '@components/pages/auth/login.component';
// import { RegisterComponent } from '@components/pages/auth/register.component';
// import { ResetPasswordComponent } from '@components/pages/auth/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    // SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginComponent],
  entryComponents: []
})
export class AuthModule { }
