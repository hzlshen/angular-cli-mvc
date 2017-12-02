import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products:Product[]=[
  new Product(1,"第一个商品",1.99,2.5,"这是一个商品Helloo word",["电子产品","硬件设备"]),
  new Product(2,"第二个商品",8.49,4.5,"这是二个商品Helloo word",["图书","硬件设备"]),
  new Product(3,"第三个商品",7.09,1.5,"这是三个商品Helloo word",["服装","硬件设备"]),
  new Product(4,"第四个商品",6.39,2.5,"这是四个商品Helloo word",["线下","硬件设备"]),
  new Product(5,"第五个商品",5.49,2.5,"这是五个商品Helloo word",["你好","硬件设备"]),
  new Product(6,"第六个商品",3.69,3.5,"这是六个商品Helloo word",["电子产品","硬件设备"])
];

  private comments:Comment[] = [
    new Comment(1,1,"2017-02-20 22:13:22","张三",3,"东西不错"),
    new Comment(2,1,"2017-01-25 23:23:22","李四",4,"东西是不错"),
    new Comment(3,1,"2017-03-10 21:29:22","王五",2,"东西挺不错"),
    new Comment(4,2,"2017-04-06 20:22:22","隔壁",5,"东西可以不错"),
  ];


  constructor() { }

  getAllCategories(): string [] {
    return ["电子产品","硬件设备","图书"]
  }

  getProducts():Product[]{
    return this.products;
  }

  getProduct(id:number):Product{
    return this.products.find((product)=>product.id == id);
  }

  getCommentsForProductId(id:number):Comment[]{
    return this.comments.filter((comment:Comment)=>comment.productId ==id);
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

export class Comment{
  constructor(
    public id :number,
    public productId : number,
    public timestamp:string,
    public user: string,
    public rating:number,
    public content:string
  ){

  }
}
