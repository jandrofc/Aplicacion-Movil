import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit, OnDestroy {

  usuario: string = '';
  private authService = inject(AuthService);

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
