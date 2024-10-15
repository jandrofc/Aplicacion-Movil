
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

interface usuario {
  id: string,
  nombreCompleto: string,
  usuario: string,
  clave: string,
  tipo: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy {

  private authService = inject(AuthService);
  usuario: string; //declaro que la variable usuario es de tipo usuario o nulo si no esta el modelo, y le asigno null
  usuarioCompleto: usuario;

  subscriptionAuthService: Subscription = new Subscription();

  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      console.log('Header:', usuario);
    });
  }

  ngOnDestroy() {
    this.subscriptionAuthService.unsubscribe();
  }

}
