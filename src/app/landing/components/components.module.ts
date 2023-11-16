import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LandingNavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  exports: [
    LandingNavbarComponent,
  ]
})
export class ComponentsModule { }
