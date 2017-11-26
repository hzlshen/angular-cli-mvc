import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,AbstractControl,Validators} from '@angular/forms';
import {equalValidator, mobileValidator} from "../validator/validator";

@Component({
  selector: 'app-reactive-regist',
  templateUrl: './reactive-regist.component.html',
  styleUrls: ['./reactive-regist.component.css']
})
export class ReactiveRegistComponent implements OnInit {


  formModel:FormGroup;

  //formbuilder重构formGroup表单结构
  constructor(fb:FormBuilder) {
    this.formModel = fb.group({
      username:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',mobileValidator],
      passwordsGroup:fb.group({
        password:[''],
        pconfirm:[''],
      },{validator:equalValidator })
    });
  }

  ngOnInit() {
  }

  onSubmit(){
    let isValid:boolean = this.formModel.get("username").valid;
    console.log("username的校验结果"+isValid);
    let errors:any = this.formModel.get("username").errors;
    console.log("username错误信息是："+JSON.stringify(errors));

    if(this.formModel.valid){
      console.log(this.formModel.value);
    }



  }

}
