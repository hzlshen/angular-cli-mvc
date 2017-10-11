/**
 * Created by Administrator on 2017/10/10.
 */
import {Component,OnInit} from "@angular/core";
import {Hero} from "./hero";
import {HeroService} from "./hero.service";
@Component({
  selector:'my-dashboard',
  template:'./dashboard,component.html'
})
export class DashboardComponent implements OnInit{
  heroes:Hero[] =[];
  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.heroService.getHeroes()
      .then(heroes=>this.heroes=heroes.slice(1,5));
  }
}
