import { Routes } from '@angular/router';
import { Cadastrar } from './cadastrar/cadastrar';
import { ComprarProduto } from './comprar-produto/comprar-produto';
import { FiltroProdutos } from './filtro-produtos/filtro-produtos';
import { HomePage } from './home-page/home-page';
import { Login } from './login/login';

export const routes: Routes = [
  {path : '', component : HomePage},
  {path : 'login', component : Login},
  {path : 'filtroProdutos', component : FiltroProdutos},
  {path : 'comprarProduto', component : ComprarProduto},
  {path : 'cadastrar', component : Cadastrar}
];
