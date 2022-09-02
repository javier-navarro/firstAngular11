import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  mensaje: string;
  identificadorParrafo: string;
  identificadorInput: string;

  constructor() { 
    this.mensaje='Welcome los weones';
    this.identificadorParrafo = 'parrafo principal';
    this.identificadorInput = 'text';
    

    setTimeout(() => {
      this.mensaje='esta cambiando la wea.------>'
      this.identificadorParrafo = 'parrafo secundario';
      this.identificadorInput = 'password';
    }, 3000);
  }

  ngOnInit(): void {
  }

  mostrarSaludo(): String {
    return 'saludo desde el método!';
  }

}
