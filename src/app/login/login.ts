import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormLogin } from './form-login/form-login';

@Component({
  selector: 'login',
  imports: [FormLogin, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
