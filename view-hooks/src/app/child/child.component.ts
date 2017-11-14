import { Component, OnInit ,AfterViewInit,AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,AfterViewInit,AfterViewChecked {
  //这两个方法 是在组件全部加载完成显示以后 才会被调用
  ngAfterViewInit(): void {
    console.log("子组件的视图初始化完成");
  }

  ngAfterViewChecked(): void {
    console.log("子组件的视图变更检测完成");
  }

  constructor() { }

  ngOnInit() {
  }

  greeting(name:string){
    console.log("hello"+name);
  }

}
