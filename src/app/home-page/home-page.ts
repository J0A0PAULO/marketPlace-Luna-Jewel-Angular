import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Carrosel } from './carrosel/carrosel';
import { FormasPagamento } from './formas-pagamento/formas-pagamento';
import { MaisVendidos } from './mais-vendidos/mais-vendidos';
import { Secao } from './secao/secao';
@Component({
  selector: 'home-page',
  imports: [Header, CommonModule, FormsModule, Secao, Carrosel, MaisVendidos, FormasPagamento,Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
 
}
