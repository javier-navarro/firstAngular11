import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {


  mensaje: string = 'mensaje de la alerta por default';
  constructor() { }

  ngOnInit(): void {
  }

}
