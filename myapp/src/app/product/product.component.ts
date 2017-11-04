import { Component, OnInit } from "@angular/core";
import {ProductService, Product} from "../shared/product.service";
import {FormControl} from "@angular/forms";
import "rxjs/Rx";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Product[];

  private keyword :string;

  private titleFilter:FormControl = new FormControl();


  constructor(private productService:ProductService) {
    this.titleFilter.valueChanges
      .debounceTime(500)
      .subscribe(
        value=>this.keyword = value
      )


  }
  //组件生命周期钩子
  //这个方法会在组件实例化后调用一次
  ngOnInit() {
    this.products=this.productService.getProducts();
  }

}


