import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})

export class BindComponent implements OnInit {

  //管道负责处理原始值到显示值的转换

  birthday:Date = new Date();
  pi:number =3.1415936;
  size:number = 7;


  constructor() {

  }

  ngOnInit() {
  }

}
