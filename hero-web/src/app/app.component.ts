import { Component } from '@angular/core';

export class Hero{
  id:number;
  name:string;
}
const HEROES:Hero[]=[
  {id:11,name:'Mr.Nice'},
  {id:12,name:'Narco'},
  {id:13,name:'Bombasto'},
  {id:14,name:'Celeritas'},
  {id:15,name:'Magneta'},
  {id:16,name:'RubberMan'},
  {id:17,name:'Dynama'},
  {id:18,name:'Dr IQ'},
  {id:19,name:'Magma'},
  {id:20,name:'Tornado'},
];


@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
    <h2>{{hero.name}} details</h2>
    <div>
      <label for="">id:</label>
      {{hero.id}}
    </div>
    <div>
    <label for="">name:</label>
     <input (ngModel)="hero.name" placeholder="name">
</div>
`
})

export class AppComponent {
  title = 'Tour of Heroes';
  hero:Hero={
    id:1,
    name:"Windstorm"
  };
  heroes =HEROES;
}
