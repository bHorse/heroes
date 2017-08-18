import { Component,OnInit } from '@angular/core';
import { Hero} from '../hero';
import {HeroService} from '../hero.service'



@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  providers:[HeroService],
  styleUrls:['heroes.component.css']
 
})
export class HeroesComponent implements OnInit {
	constructor(private heroService:HeroService){}
	onSelect(hero:Hero){
		this.selectedHero=hero;
	}
	ngOnInit(): void {
		this.getHeroes();
	}
	heroes:Hero[];
	selectedHero:Hero;


	getHeroes(): void {
		 this.heroService.getHeroes().then(heros=>this.heroes=heros);
	}
}
