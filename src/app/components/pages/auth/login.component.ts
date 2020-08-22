import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.scss']
})
export default class LoginComponent implements OnInit {
  constructor() {
    console.log('here is LoginComponent');
  }

  ngOnInit() {}
}

export { LoginComponent };
