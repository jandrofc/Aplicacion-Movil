import { usuario } from './../models/bd.models';

import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<String>(''); //importar la interfaz usuario
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioTipoSubject = new BehaviorSubject<usuario | null>(null);
  usuarioTipo$ = this.usuarioTipoSubject.asObservable();

  private loginFailSubject = new BehaviorSubject<boolean>(false);
  loginFail$ = this.loginFailSubject.asObservable();

  webservice = inject(WebService);
  async BuscarBD(usuario: string, clave: string) {
    const url = 'https://66feda392b9aac9c997d9a7c.mockapi.io/app/'
    const res = await this.webservice.request('GET', url, 'users') as Array<usuario>;

    const user = res.find(u => u.usuario === usuario && u.clave === clave);
        
      if (user) {
        this.isAuthenticatedSubject.next(true);
        this.usuarioSubject.next(user.tipo);
        this.usuarioTipoSubject.next(user);
        this.loginFailSubject.next(false);
      } else {
        this.isAuthenticatedSubject.next(false);
        this.loginFailSubject.next(true);
      }
    }

    async registrarNuevoUsuario(usuario: any) {
      const url = 'https://66feda392b9aac9c997d9a7c.mockapi.io/app/';
      try {
        const usuariosExistentes = await this.obtenerUsuarios();
        const usuarioExistente = usuariosExistentes.find( u => u.usuario === usuario.user);

        if (usuarioExistente) {
          throw new Error('El usuario ya existe');
        }

        const res = await this.webservice.request('POST', url, 'users', usuario);
        console.log('Usuario registrado con exito', res);
        return res;
      } catch (error) {
        throw error;
      }
    }

    async obtenerUsuarios(): Promise<usuario[]> {
      const url = '';
      try {
        const res = await this.webservice.request('GET', url, 'users') as Array<usuario>;
        return res;
      } catch (error) {
        throw error;
      }
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
