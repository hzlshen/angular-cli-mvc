import { Component, OnInit ,Input} from '@angular/core';
// import {ActivateRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

@Input()

  stockCode :string;



  @Input()
  amount:number;

  constructor() {
    setInterval(()=>{
      this.stockCode="Apple"
    },3000)
  }

  ngOnInit() {
  }

}
