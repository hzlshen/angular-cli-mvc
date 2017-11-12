import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges {

  //注解输入属性
  @Input()
  greeting:string;

  @Input()
  user:{name:string};

  message:string = "初始化消息";

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

      console.log(JSON.stringify(changes,null,2));

  }

}
