import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {mobileValidator} from '../validator/validator';

//指令 和组件一样 只是没有模板
@Directive({
  selector: '[mobile]',
  providers:[{
    provide:NG_VALIDATORS,
    useValue:mobileValidator,
    multi:true
  }]
})
export class MobileValidatorDirective {

  constructor() { }

}
