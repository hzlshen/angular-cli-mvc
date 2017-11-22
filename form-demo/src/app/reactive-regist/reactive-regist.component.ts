import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,AbstractControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  //表单校验
  xxxx(control:AbstractControl):{[key:string]: any}{
    return null;
  }

  formModel:FormGroup;

  //formbuilder重构formGroup表单结构
  constructor(fb:FormBuilder) {
    this.formModel = fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      mobile:[''],
      passwordsGroup:fb.group({
        password:[''],
        pconfirm:[''],
      })
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.formModel.value);
  }

}
