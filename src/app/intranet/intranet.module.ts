import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { IntranetRoutingModule } from './intranet-routing.module';
import { IntranetComponent } from './intranet.component';
import { UsersComponent } from './views/users/users.component';


@NgModule({
  declarations: [
    IntranetComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
  ]
})
export class IntranetModule { }
