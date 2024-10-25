import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.page.html',
  styleUrls: ['./asignaturas.page.scss'],
})
export class AsignaturasPage  implements OnInit {

  asignaturas = [
    { nombre: 'Programación movil', id: 'INF101' },
    { nombre: 'Calidad de software', id: 'INF102' },
    { nombre: 'Programacion de base de datos', id: 'INF103' },
    { nombre: 'Arquitectura', id: 'INF104' },
    { nombre: 'programacion de algoritmo', id: 'INF105' },
  ];


  ngOnInit() {}

}
