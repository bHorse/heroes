import { Component, OnInit,Input } from '@angular/core';
import { Hero} from '../hero';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {HeroService} from '../hero.service'
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input()
	hero:Hero;
  constructor(private heroService: HeroService,
  private route: ActivatedRoute,
  private location: Location) { }

  ngOnInit() {
  }

}