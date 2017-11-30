import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms/src/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  // @Input()
  constructor() { }

  ngOnInit() {
  }

  onSubmit(value:any,valid:boolean){
    console.log(valid);
    console.log(value);
  }

  mobileValid:boolean = true;
  mobileUntouched:boolean = true;
  onMobileInput(form:NgForm){
    if(form){
      this.mobileValid = form.form.get("mobile").valid;
      this.mobileUntouched= form.form.get("mobile").untouched;
    }
  }
}
