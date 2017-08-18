import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import {HeroService} from './hero.service';
import { DashboardComponent } from './dashboard/dashboard.component'
import { RouterModule } from '@angular/router'

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
  RouterModule.forRoot([{
    path:"heroes",
    component:HeroesComponent
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path:"detail:id",
    component:HeroDetailComponent
  },
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
  ])
  ],
  providers:[HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
