import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroService} from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component'
import { AppRoutingModule } from './app-routing/app-routing.module'

@NgModule({
  declarations: [
  AppComponent,
  HeroDetailComponent,
  HeroesComponent,
  DashboardComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
  ],
  providers:[HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
