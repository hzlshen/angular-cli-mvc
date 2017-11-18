import { Component, OnInit,Input,Output ,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {


  @Input()
  private rating:number = 0;

  @Output()
  private ratingChange:EventEmitter<number>= new EventEmitter();


  private stars:boolean[];

  @Input()
  private readonly :boolean = true;

  constructor() { }


  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.stars =[];
    for(let i =1; i<=5;i++){
      this.stars.push(i>this.rating)
    }
  }

  clickStar(index:number){
    if(!this.readonly){
    this.rating = index+1;
    this.ratingChange.emit(this.rating);
    }
  }

}

//小结：父子之间应该避免直接访问彼此的内部，而应该通过输入输出属性来通讯
//组件可以通过输出属性发射自定义事件 这些事件可以携带任何你想携带的数据
//在没有父子关系的组件之间，尽量使用中间人模式
//父组件可以在运行时 投影一个或多个模板片段到子组件中
//每个angular组件都提供了一组生命周期钩子 供你在某些特定的事件发生时执行相应的逻辑
//angular的变更检测机制会监控组件属性的变化并自动更新视图，这个检测非常频繁且默认是针对整个组件树的 所以实现相关钩子时要慎用
//你可以标记你的组件树中的一个分支，使其被排除在变更检测机制之外
