import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntranetComponent } from './intranet.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: IntranetComponent,
    children: [
      { path: '', component: UsersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }
