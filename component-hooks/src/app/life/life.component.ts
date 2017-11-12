import { Component, OnInit, OnChanges, DoCheck,AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked ,OnDestroy,
  SimpleChanges,
  Input,} from '@angular/core';

let logIndex :number = 1;

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
//声明所有声明周期钩子
export class LifeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  //显示钩子调用顺序
  @Input()
  name:string;

  logIt(msg:string ){
    console.log(`#${logIndex} ${msg}`);
  }

  constructor() {
    this.logIt("name属性在constructor里的值是："+name);
  }

  ngOnChanges(changes: SimpleChanges): void {

    let name =  changes['name'].currentValue;

    this.logIt("name属性在ngOnChanges里的值是："+name);
  }

  ngDoCheck(): void {
    this.logIt("ngDoCheck");
  }

  ngAfterContentInit(): void {
    this.logIt("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    this.logIt("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    this.logIt("ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    this.logIt("ngAfterViewChecked");
  }

  ngOnDestroy(): void {
    this.logIt("ngOnDestroy");
  }

  ngOnInit() {
    this.logIt("ngOnInit");
  }

}
