import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { redirectIfAuthGuard } from './guard/redirect-if-auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [redirectIfAuthGuard]
  },
  {
    path:'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule),
    canActivate: [authGuard]
  },
  {
    path: 'alumno/asignaturas',
    loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule),
    canActivate: [authGuard]
  },
  {
    path:'docente/clase',
    loadChildren: () => import('./pages/clase/clase.module').then( m => m.ClasePageModule),
    canActivate: [authGuard]
  },
  {
    path:'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule),
    canActivate: [authGuard]
  },
  {
    path:'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule),
    canActivate: [redirectIfAuthGuard]
  },
  {
    path:'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule),
    canActivate: [redirectIfAuthGuard]
  },
  {
    path:'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule),
    canActivate: [authGuard]
  },
  {
    path:'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule),
    canActivate: [redirectIfAuthGuard]
  },
  {
    path:'docente/registro-asistencia',
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule),
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
