import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';

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
      username:[''],
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
