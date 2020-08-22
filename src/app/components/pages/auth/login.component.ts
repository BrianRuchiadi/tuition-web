import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})
export default class LoginComponent implements OnInit {
  credential = {
    username: '',
    password: ''
  };

  error = {
    isError: false,
    message: ''
  };

  constructor(
    private authS: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {}

  login() {
    if (!this.validate()) { return; }
    const { username, password } = this.credential;
    this.authS.login({ username, password }).subscribe(res => {
      console.log('response received', res);
      this.router.navigate(['/dashboard']);
    }, err => {
      switch (err.status) {
        case 404: this.setError('404! Please contact the administrator'); break;
        default: this.setError(err.message); break;
      }
    });
  }

  validate() {
    this.error.isError = false;

    switch (true) {
      case !this.credential.username: this.setError('Username is required'); return false;
      case !this.credential.password: this.setError('Password is required'); return false;
    }

    return true;
  }

  setError(message) {
    this.error.isError = true;
    this.error.message = message;
  }
}

export { LoginComponent };
