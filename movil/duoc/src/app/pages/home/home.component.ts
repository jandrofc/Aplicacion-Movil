
import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { usuario } from 'src/app/models/bd.models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {


  usuario: usuario | null = null;
  private AuthService = inject(AuthService);
  private router = inject(Router);
  private subscriptionAuthService = new Subscription();
  tipo: string = '';


  constructor() { }

  ngOnInit() {
    this.AuthService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated===false) {
        this.router.navigate(['']);
      }
    });
    this.subscriptionAuthService = this.AuthService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      console.log('user:', usuario);
    });

  }
}

