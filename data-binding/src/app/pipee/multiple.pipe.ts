import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiple'
})
//管道是带有管道元数据装饰器的类
//和组件是一样的
export class MultiplePipe implements PipeTransform {

  transform(value: number, args?: number): any {
    if (!args){
      args = 1;
    }
    return value*args;
  }

}
