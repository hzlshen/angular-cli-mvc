import { Component, OnInit,Input, OnChanges, SimpleChanges,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {

  //注解输入属性
  @Input()
  greeting:string;

  @Input()
  user:{name:string};

  message:string = "初始化消息";

  oldUsername:string;

  changesDetected:boolean=false;

  ngChangeCount:number = 0;

  ngDoCheck(): void {
    if(this.user.name !== this.oldUsername){
      this.changesDetected = true;
      console.log("DoCheck:user.name从"+this.oldUsername+"变为"+this.user.name);
      this.oldUsername = this.user.name;
    }

    if(this.changesDetected){
      this.ngChangeCount =   0;
    }else {
      this.ngChangeCount =this.ngChangeCount+1;
      console.log("DoCheck:user.name没变化时ngDoCheck方法已经被调用"+this.ngChangeCount+"次");
    };

    this.changesDetected = false;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

      console.log(JSON.stringify(changes,null,2));

  }

}
