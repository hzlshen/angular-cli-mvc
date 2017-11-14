import { Component,OnInit,ViewChild } from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @ViewChild("child1")
  child1:ChildComponent;

  constructor(){}

  ngOnInit(): void {
    this.child1.greeting("Tom");
  }
  title = 'app';
}
