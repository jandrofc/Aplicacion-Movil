import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ClaseComponent } from './clase/clase.component';
import { RegistroAsistenciaComponent } from './registro-asistencia/registro-asistencia.component';
import { RegistrarComponent } from './registrar/registrar.component';



@NgModule({
  declarations: [HomeComponent,LoginComponent,PasswordComponent,PerfilComponent,ClaseComponent,RegistroAsistenciaComponent, RegistrarComponent], //aqui deben ir los componentes que se agregaran
  imports: [ // aqui se importa el modulo de rutas
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule
]
})
export class PagesModule { }
