import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page';
import { Login } from './login/login';

export const routes: Routes = [
  {path : '', component : HomePage},
  {path : 'login', component : Login}
];
