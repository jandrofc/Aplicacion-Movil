import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
})
export class RegistrarComponent {

  nombreCompleto: string = '';
  usuario: string = '';
  clave: string = '';
  tipo: string = 'alumno';

  errorMessage: string = '';
  successMessage: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);
  private alertController = inject(AlertController);

  registroFallido: boolean = false;

  async validarUsuarioExistente(usuario: string): Promise<boolean> {
    try {
      const usuariosExistentes = await this.authService.obtenerUsuarios();
      return usuariosExistentes.some(u => u.usuario === usuario);
    } catch (error) {
      this.errorMessage = 'Error al validar el usuario';
      await this.mostrarAlerta('Error', 'Error al validar el usuario. Intentelo de nuevo.');
      return true;
    }
  }

  async registrar() {
    this.registroFallido = false;

    const usuarioExiste = await this.validarUsuarioExistente(this.usuario);

    if (usuarioExiste) {
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);
      return;
    }

    const nuevoUsuario = {
      name: this.nombreCompleto,
      user: this.usuario,
      pass: this.clave,
      type: this.tipo
    };

    try {
      await this.authService.registrarNuevoUsuario(nuevoUsuario);
      await this.mostrarAlerta('Exito', this.successMessage);
    } catch (error) {
      this.registroFallido = true;
      await this.mostrarAlerta('Error', this.errorMessage);
    }
  }

  async mostrarAlerta(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }}

