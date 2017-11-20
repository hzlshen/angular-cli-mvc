import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  username:FormControl = new FormControl('aaa');
  formModel:FormGroup =new FormGroup({
      form:new FormControl(),
      to:new FormControl()
  });

  emails:FormArray = new FormArray([
    new FormControl('a@a.com'),
    new FormControl('b@b.com'),
  ])

  constructor() { }

  ngOnInit() {
  }

}
