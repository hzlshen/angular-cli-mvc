import { Component, OnInit ,Input} from '@angular/core';
import {PriceQuote} from '../price-quotee/price-quotee.component';
// import {ActivateRoute} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

@Input()

priceQuote :PriceQuote;


  constructor() {

  }

  ngOnInit() {
  }

}
