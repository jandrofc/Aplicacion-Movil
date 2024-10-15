import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ClaseComponent } from './clase/clase.component';
import { RegistroAsistenciaComponent } from './registro-asistencia/registro-asistencia.component';
import { RegistrarComponent } from './registrar/registrar.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'password',component:PasswordComponent},
  {path:'home/perfil',component:PerfilComponent},
  {path:'home/clase',component:ClaseComponent},
  {path:'home/registro-asistencia',component:RegistroAsistenciaComponent},
  {path: 'registrar', component:RegistrarComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a 'login' si la ruta está vacía
  {path: '**', redirectTo: 'login', pathMatch: 'full' }, // Redirigir a 'login' para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
