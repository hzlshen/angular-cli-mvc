import { Component, OnInit } from "@angular/core";
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private products:Array<Product>;

  constructor() { }
  //组件生命周期钩子
  //这个方法会在组件实例化后调用一次
  ngOnInit() {
    this.products=[
      new Product(1,"第一个商品",1.99,2.5,"这是一个商品Helloo word",["电子产品","硬件设备"]),
      new Product(2,"第二个商品",8.49,4.5,"这是二个商品Helloo word",["图书","硬件设备"]),
      new Product(3,"第三个商品",7.09,1.5,"这是三个商品Helloo word",["服装","硬件设备"]),
      new Product(4,"第四个商品",6.39,2.5,"这是四个商品Helloo word",["线下","硬件设备"]),
      new Product(5,"第五个商品",5.49,2.5,"这是五个商品Helloo word",["你好","硬件设备"]),
      new Product(6,"第六个商品",3.69,3.5,"这是六个商品Helloo word",["电子产品","硬件设备"])
    ]
  }

}

export class Product{

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){

  }

}
