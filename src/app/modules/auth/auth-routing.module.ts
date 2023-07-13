import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/components/auth/login/login.component';
import { ProfileComponent } from 'src/app/components/auth/profile/profile.component';
import { RegisterComponent } from 'src/app/components/auth/register/register.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Ingresar',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Registro',
    component: RegisterComponent,
  },
  {
    path: 'profile',
    title: 'Perfil',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
