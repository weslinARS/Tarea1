import { Component, OnInit } from '@angular/core';
// objeto con los datos de la persona
@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css'],
})
export class DatosComponent implements OnInit {
  datos: { [key: string]: any } = {
    nombres: 'Weslin Antonio',
    apellidos: 'Rodriguez Silva ',
    edad: 19,
    Pais: 'Nicaragua',
    Ciudad: 'León',
    colorFavorito: 'Negro',
  };
  constructor() {
    this.datos;
  }
  ObtenerClaves(): string[] {
    return Object.keys(this.datos);
  }
  ngOnInit(): void {}
}
