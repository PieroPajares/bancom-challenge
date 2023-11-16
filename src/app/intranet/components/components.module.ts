import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';

import { UserPostFormComponent } from './user-post-form/user-post-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { UserTableComponent } from './user-table/user-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu'
import { IntranetNavbarComponent } from './intranet-navbar/intranet-navbar.component';



@NgModule({
  declarations: [
    UserPostFormComponent,
    UserTableComponent,
    IntranetNavbarComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
  ],
  exports: [
    UserPostFormComponent,
    UserTableComponent,
    IntranetNavbarComponent
  ]
})
export class ComponentsModule { }
