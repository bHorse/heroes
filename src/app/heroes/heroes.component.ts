import { Component,OnInit } from '@angular/core';
import { Hero} from '../hero';
import {HeroService} from '../hero.service';
import { Router } from '@angular/router';



@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  providers:[HeroService],
  styleUrls:['heroes.component.css']
 
})
export class HeroesComponent implements OnInit {
	constructor(private router:Router,private heroService:HeroService){}
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
	gotoSelected():void{
		this.router.navigate(['/detail',this.selectedHero.id]);
	}
}
