import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = 'mensaje inicial';
   }

  ngOnInit(): void {
  }

  onClick(e:any): void{
    console.log(e);
  }

  cambiosSelect(e: any){
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
  }

  onMouseEnter(e: any){
    this.mensaje = 'mensaje modificado por el mouseenter';
  }

  onMouseOut(e: any){
    this.mensaje = 'saliendo del div por el  mouseout';
  }

  onInput(e:any){
    //console.log(e.target.value);
  }

  onBlur(e:any){
    console.log('pierde el foco');
  }

  onFocus(e:any){
    console.log('recibe el foco');
  }

}
