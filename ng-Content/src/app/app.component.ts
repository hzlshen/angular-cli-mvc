import { Component, AfterContentInit, AfterContentChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit,AfterContentChecked,AfterViewInit{

  message = "Hello";

  ngAfterContentInit(): void {
    console.log("父组件投影内容初始化完毕");
    this.message = "Hello word";
  }
  ngAfterContentChecked(): void {
    console.log("父组件投影内容变更检测完毕");
  }
  ngAfterViewInit(): void {
    console.log("父组件视图内容初始化完毕");
  }



  title = 'app';
  divContent = "<div>慕课网</div>"
}
