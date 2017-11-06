import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-quotee',
  templateUrl: './price-quotee.component.html',
  styleUrls: ['./price-quotee.component.css']
})
export class PriceQuoteeComponent implements OnInit {

  stockCode:string = "IBM";

  price:number;

  constructor() { }

  ngOnInit() {
  }

}


export class PriceQuote{
  constructor(
    public stockCode:string,
    public lastPrice:number
  ){

  }
}
