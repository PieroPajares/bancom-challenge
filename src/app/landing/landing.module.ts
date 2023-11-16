import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { HomeComponent } from './views/home/home.component';
import { MatButtonModule } from '@angular/material/button';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [
    LandingComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MatButtonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
