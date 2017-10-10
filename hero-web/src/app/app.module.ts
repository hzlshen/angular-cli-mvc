import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  //第一次报错原因： 没导入FormsModule 需手动导入
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
