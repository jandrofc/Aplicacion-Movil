import { Component, OnInit, inject } from '@angular/core';
import { addIcons } from 'ionicons';
import { home, person, book, checkmarkCircleOutline } from 'ionicons/icons';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { usuario } from '../../models/bd.models';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent  implements OnInit {

  private authService = inject(AuthService);
  usuario: usuario | null = null;

  subscriptionAuthService: Subscription = new Subscription();


  constructor() { }

  ngOnInit() {
    this.subscriptionAuthService = this.authService.usuario$.subscribe(usuario => {
      this.usuario = usuario;
      console.log('Header:', usuario);
    });
    addIcons({ home, person, book, checkmarkCircleOutline });
  }

}
