import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordComponent } from './password/password.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'password',component:PasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
