import { Component, OnInit } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/Rx';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  products:Observable<any>;

  // http发get请求 返回res里的json
  constructor(private http:Http) {

    let myHeaders:Headers = new Headers();
    myHeaders.append("Auction","Basic 123456");

    this.products = this.http.get('/api/products',{headers:myHeaders})
      .map((res)=>res.json());
  }

  ngOnInit() {
    // http请求不是get发出去的 而是subscribe发出去的
  }

}
