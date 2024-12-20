import { usuario } from '../../models/bd.models';
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
})
export class DocentePage  implements OnInit {

  usuario: usuario | null = null;
  private AuthService = inject(AuthService);
  private router = inject(Router);
  subscriptionAuthService: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.AuthService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      console.log('user:', usuario);
    });

  }
  logout() {
    this.AuthService.logout();
    this.router.navigate(['logout']);
  }

}
