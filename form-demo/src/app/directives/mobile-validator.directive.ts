import { Directive } from '@angular/core';

//指令 和组件一样 只是没有模板
@Directive({
  selector: '[appMobileValidator]'
})
export class MobileValidatorDirective {

  constructor() { }

}
