import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { intranetGuard } from './intranet/guards/intranet-guard.guard';

const routes: Routes = [
  { path: '',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule),
  },
  { path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule),
  },
  { path: 'intranet',
    canActivateChild: [intranetGuard],
    loadChildren: () => import('./intranet/intranet.module').then(m => m.IntranetModule),
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
