import { usuario } from './../../models/bd.models';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';

//import { trigger, transition, style, animate } from '@angular/animations'; // Animaciones de trancicion



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent  implements OnInit {

  usuario: string = '';
  clave: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  private loginFailSubject = new BehaviorSubject<boolean>(false);
  loginFail$ = this.loginFailSubject.asObservable();
  loginFail: boolean = false;

  ngOnInit(): void {
    this.authService.loginFail$.subscribe(loginFail => this.loginFail = loginFail);

    this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.router.navigate(['/home']);
      }
    });



  }

  constructor() { }

  isLoading: boolean = false;
  async login(usuario: string, clave: string): Promise<void> { 
    this.isLoading = true; 
    this.loginFail = false; 

    const isAuthenticated = await this.authService.BuscarBD(usuario, clave);

    this.isLoading = false;

    if (isAuthenticated) {
      this.usuario = '';
      this.clave = '';
      this.router.navigate(['/home']);
    } else {
      this.loginFail = true;
    }
  }
}
