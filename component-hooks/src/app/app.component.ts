import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'en';

  greeting:string = "Hello";

  user:{name:string} ={name:"Tom"};

  //ngOnChanges调用机制：在父组件初始化或在修改子组件输入参数时会被调用

  constructor(){

    //字符串不可改
    //var greeting = "Hello";
    //创建了一个新的字符串
    //greeting = "Hello world";
    //而greeting的值是改变的  指向从第一个改变为第二个地址

    //对象可变的 字符串不可变

    //user 被创建后 一个name的地址为tom
    //var user = {name:"Tom"};
    //第二行执行后 user的值改变了 name的内存地址指向nihao的地址
    //但是user本身的内存地址是不变的

    //这个之间的区别是可变对象和不可变对象的区别
    //user.name = "Nihao";

  }





}
