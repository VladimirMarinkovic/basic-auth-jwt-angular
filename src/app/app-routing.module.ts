import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import {AuthGuard} from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{
        path: 'dashboard/default',
        redirectTo: 'dashboard/default',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: './demo/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'sample-page',
        loadChildren: './demo/extra/sample-page/sample-page.module#SamplePageModule'
      },
      {
        path: 'pocetna',
        loadChildren: './demo/pocetna/pocetna.module#PocetnaModule',
      },
      {
        path: 'korisnici',
        loadChildren: './demo/korisnici/korisnici.module#KorisniciModule',
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './demo/pages/authentication/authentication.module#AuthenticationModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
