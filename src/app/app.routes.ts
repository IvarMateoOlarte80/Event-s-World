import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./features/signup/signup').then(m => m.SignUpComponent)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
