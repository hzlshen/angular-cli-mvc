/**
 * Created by Administrator on 2017/10/10.
 */
import {Component} from "@angular/core";


@Component({
  selector:'app-root',
  template:`
  <h1>{{title}}</h1>
  <a routerLink="/heroes">Heroes</a>
  <router-outlet></router-outlet>
`
})
export class AppComponent{
  title ="Tour of Heroes"
}
