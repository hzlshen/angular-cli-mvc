import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  //属性绑定
  //差值表达式和属性绑定 是一回事
  //只要编写代码的时候同一风格就可以了
  imgUrl:string = "http://placehold.it/400x400"

  constructor() { }

  ngOnInit() {
  }
  doOnClick(event:any){
    console.log(event);
  }
  doOnInput(event:any){
    //打印的是他的dom属性
    console.log(event.target.value);
    //HTML属性
    console.log(event.target.getAttribute("value"));
  }

}
