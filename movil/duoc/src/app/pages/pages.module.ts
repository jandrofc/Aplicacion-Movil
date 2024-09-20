import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PasswordComponent } from './password/password.component';



@NgModule({
  declarations: [HomeComponent,LoginComponent,PasswordComponent], //aqui deben ir los componentes que se agregaran
  imports: [ // aqui se importa el modulo de rutas
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    IonicModule,
    FormsModule
]
})
export class PagesModule { }
