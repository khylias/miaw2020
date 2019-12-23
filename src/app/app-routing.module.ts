import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'connexion',
    component: LoginComponent
  },
  {
    path: 'inscription',
    component: SignupComponent
  },
  {
    path: 'equipe',
    children: [
      {
        path: 'nouveau',
        canActivate: [AuthGuard],
        component: TeamFormComponent
      },
      {
        path: ':id',
        component: TeamFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
