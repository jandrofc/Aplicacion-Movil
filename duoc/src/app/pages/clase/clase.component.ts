import { Subscription } from 'rxjs';
import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-clase',
  templateUrl: './clase.component.html',
  styleUrls: ['./clase.component.scss'],
})
export class ClaseComponent  implements OnInit {

  private authService = inject(AuthService); // observamos el servicio de autenticacion
  usuario: string = '';

 // SubscriptionAuthService: Subscription; // suscripcion al servicio de autenticacion

 asignaturas = [
  { nombre: 'Programación movil', id: 'INF101' },
  { nombre: 'Calidad de software', id: 'INF102' },
  { nombre: 'Programacion de base de datos', id: 'INF103' },
  { nombre: 'Arquitectura', id: 'INF104' },
  { nombre: 'programacion de algoritmo', id: 'INF105' },
];

  constructor() { }
  
  ngOnInit() {}

}
