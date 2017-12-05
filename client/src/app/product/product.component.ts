import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs/Rx';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  dataSource:Observable<any>;

  products:Array<any> =[];

  //http发get请求 返回res里的json
  constructor(private http:Http) {
    this.dataSource = this.http.get('/api/products').map((res)=>res.json());
   }

  ngOnInit() {
    //赋值给本地的products
    this.dataSource.subscribe(
      (data)=>this.products = data
    )
  }

}
