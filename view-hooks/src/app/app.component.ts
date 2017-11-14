import { Component,OnInit,ViewChild,AfterViewInit,AfterViewChecked } from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit,AfterViewChecked{

  message:string;
  //这两个方法 是在组件全部加载完成显示以后 才会被调用
  //不允许在视图组装好之后再去刷新这个视图的
  ngAfterViewInit(): void {
    console.log("父组件的视图初始化完成");
    setTimeout(()=>{
      this.message = "hello";
    },0)

  }

  ngAfterViewChecked(): void {
    console.log("父组件的视图变更检测完成");
  }



  @ViewChild("child1")
  child1:ChildComponent;

  constructor(){}

  ngOnInit(): void {
    setInterval(()=>{
      this.child1.greeting("Tom");
    },5000)

  }
  title = 'app';
}
