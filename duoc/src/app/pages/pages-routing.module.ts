import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ClaseComponent } from './clase/clase.component';
import { RegistroAsistenciaComponent } from './registro-asistencia/registro-asistencia.component';
import { RegistrarComponent } from './registrar/registrar.component';

import { authGuard } from '../guard/auth.guard';
import { redirectIfAuthGuard } from '../guard/redirect-if-auth.guard';
const routes: Routes = [
  {path:'home', component: HomeComponent, canActivate: [authGuard]},
  {path:'login', component: LoginComponent,canActivate: [redirectIfAuthGuard]},
  {path:'password',component:PasswordComponent,canActivate: [redirectIfAuthGuard]},
  {path:'home/perfil',component:PerfilComponent , canActivate: [authGuard]},
  {path:'home/clase',component:ClaseComponent, canActivate: [authGuard]},
  {path:'home/registro-asistencia',component:RegistroAsistenciaComponent, canActivate: [authGuard]},
  {path: 'registrar', component:RegistrarComponent,canActivate: [redirectIfAuthGuard]},
  {path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a 'login' si la ruta está vacía
  {path: '**', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a 'login' para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }