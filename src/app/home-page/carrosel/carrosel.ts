import { Component } from '@angular/core';

@Component({
  selector: 'app-carrosel',
  imports: [],
  templateUrl: './carrosel.html',
  styleUrl: './carrosel.scss',
})
export class Carrosel {

  carrosel : String [] = ['img-1.png',' img-2.png', 'img-3.png'];
  index : number = 0

  proximo(){
    
    if(this.index >= this.carrosel.length -1) {
      this.index = 0;
    } else {
      this.index++;
    }
  }
  
  anterior(){
    if(this.index === 0) {
      this.index = this.carrosel.length -1;
    } else {
     this.index--;
    }
  }
  
}
