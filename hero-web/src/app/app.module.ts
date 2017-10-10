import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./dashboard.component";




@NgModule({
  declarations: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'heroes',
        component:'HeroesComponent'
      },
      {
        path:'dashboard',
        component:'DashboardComponent'
      },
      {
        path:'',
        redirectTo:'/dashboard',
        pathMatch:'full'
      }
    ])
  ],
  //第一次报错原因： 没导入FormsModule 需手动导入
  imports: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
