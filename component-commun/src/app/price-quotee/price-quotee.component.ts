import { Component, OnInit, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-price-quotee',
  templateUrl: './price-quotee.component.html',
  styleUrls: ['./price-quotee.component.css']
})
export class PriceQuoteeComponent implements OnInit {

  stockCode:string = "IBM";

  price:number;

  @Output('priceChange')
  lastPrice:EventEmitter<PriceQuote> = new EventEmitter();

  constructor() {
    setInterval(()=>{
      let priceQuotee : PriceQuote = new PriceQuote(this.stockCode,100*Math.random());
      this.price = priceQuotee.lastPrice;
      this.lastPrice.emit(priceQuotee);
    },1000)
  }

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
