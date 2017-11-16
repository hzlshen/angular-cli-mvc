import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';
import{ Routes,RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

var routeConfig:Routes = [
  {
    path:'',
    component:ChildComponent
  },
  {
    path:'child2',
    component:Child2Component
  }
]


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
