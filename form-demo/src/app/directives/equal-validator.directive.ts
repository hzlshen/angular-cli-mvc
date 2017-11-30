import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {equalValidator} from '../validator/validator';

@Directive({
  selector: '[equal]',
  providers:[{
    provide:NG_VALIDATORS,
    useValue:equalValidator,
    multi:true
  }]
})
export class EqualValidatorDirective {

  constructor() { }

}
