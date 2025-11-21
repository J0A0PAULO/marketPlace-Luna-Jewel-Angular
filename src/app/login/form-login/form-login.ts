import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'form-login',
  imports: [],
  templateUrl: './form-login.html',
  styleUrl: './form-login.scss',
})
export class FormLogin implements OnInit {

  constructor(private service: Login) {
      
  }

  ngOnInit(): void {
      
  }

}
