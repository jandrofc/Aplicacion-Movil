import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { usuarioSimulados } from '../models/data.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<string>('');
  usuario$ = this.usuarioSubject.asObservable();

  private loginFailSubject = new BehaviorSubject<boolean>(false);
  loginFail$ = this.loginFailSubject.asObservable();

  BuscarBD(usuario: string, clave: string): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const usuarioEncontrado = usuarioSimulados.find(
          u => u.usuario === usuario && u.clave === clave
        );
        
      if (usuarioEncontrado) {
        this.isAuthenticatedSubject.next(true);
        this.usuarioSubject.next(usuarioEncontrado.nombreCompleto);
        this.loginFailSubject.next(false);
        resolve(true);
      } else {
        this.isAuthenticatedSubject.next(false);
        this.loginFailSubject.next(true);
        resolve(false);
      }
    }, 1000);
  });
}

logout(): void {
  this.usuarioSubject.next('');
  this.isAuthenticatedSubject.next(false);
  this.loginFailSubject.next(false);
}

isLoggedIn() {
  return this.isAuthenticated$;
}

}
