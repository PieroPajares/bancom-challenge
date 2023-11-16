import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { UsersComponent } from './views/users/users.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    IntranetComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    ComponentsModule
  ]
})
export class IntranetModule { }
