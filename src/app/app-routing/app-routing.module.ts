import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
},{
    path:"heroes",
    component:HeroesComponent
  },{
    path: 'dashboard',
    component: DashboardComponent
  },{
    path:"detail/:id",
    component:HeroDetailComponent
  }
  ])
  ],
  exports:[
  RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
