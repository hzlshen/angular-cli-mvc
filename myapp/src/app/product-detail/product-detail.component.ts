import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productTitile:string;

  constructor(private routeInfo : ActivatedRoute) { }

  ngOnInit() {
    this.productTitile = this.routeInfo.snapshot.params["prodTitle"];
  }

}
