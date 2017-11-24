import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,AbstractControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {

  //表单校验
  mobileValidator(control:FormControl):any{
    var myrea = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    let valid = myrea.test(control.value);
    console.log("mobile的校验结果是："+valid);
    return valid?null :{mobile:true};
  }

  formModel:FormGroup;

  //formbuilder重构formGroup表单结构
  constructor(fb:FormBuilder) {
    this.formModel = fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',this.mobileValidator],
      passwordsGroup:fb.group({
        password:[''],
        pconfirm:[''],
      })
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    let isValid:boolean = this.formModel.get("username").valid;
    console.log("username的校验结果"+isValid);
    let errors:any = this.formModel.get("username").errors;
    console.log("username错误信息是："+JSON.stringify(errors));
    console.log(this.formModel.value);
  }

}
