import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { WebService } from './web.service';
import { usuario } from '../models/bd.models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  private usuarioSubject = new BehaviorSubject<usuario | null>(null); //importar la interfaz usuario
  usuario$ = this.usuarioSubject.asObservable();

  private usuarioTipoSubject = new BehaviorSubject<String>('');
  usuarioTipo$ = this.usuarioTipoSubject.asObservable();

  private loginFailSubject = new BehaviorSubject<boolean>(false);
  loginFail$ = this.loginFailSubject.asObservable();

  webservice = inject(WebService);

  url = 'https://670e92f43e71518616551dc2.mockapi.io/testapp/'

  async BuscarBD(usuario: string, clave: string) {
    const res = await this.webservice.request('GET', this.url, 'usuarios') as Array<usuario>;
    const user = res.find(u => u.usuario === usuario && u.clave === clave);
      if (user) {
        this.isAuthenticatedSubject.next(true);
        this.usuarioSubject.next(user);
        this.usuarioTipoSubject.next(user.tipo);
        this.loginFailSubject.next(false);
      } else {
        this.isAuthenticatedSubject.next(false);
        this.loginFailSubject.next(true);
      }

    }
  async obtenerUsuarios(): Promise<usuario[]> {
    try {
      const res = await this.webservice.request('GET', this.url, 'usuarios') as Array<usuario>;
      return res;
    } catch (error) {
      throw error;
    }
  }

  async registrarNuevoUsuario(usuario: any) {
    try {
      const usuariosExistentes = await this.obtenerUsuarios();
      const usuarioExistente = usuariosExistentes.find( u => u.usuario === usuario.user);

      if (usuarioExistente) {
        throw new Error('El usuario ya existe');
      }

      const res = await this.webservice.request('POST', this.url, 'usuarios', usuario);
      console.log('Usuario registrado con exito', res);
      return res;
    } catch (error) {
      throw error;
    }
  }

logout(): void {
  this.isAuthenticatedSubject.next(false);
  this.usuarioSubject.next(null);
  this.usuarioTipoSubject.next('');
  this.loginFailSubject.next(false);
}

isLoggedIn() {
  return this.isAuthenticated$;
}

}
