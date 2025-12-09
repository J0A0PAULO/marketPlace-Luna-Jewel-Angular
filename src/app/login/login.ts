import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from "../header/header";
import { Footer } from "../footer/footer";

@Component({
  selector: 'login',
  imports: [RouterLink, Header, Footer],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

}
