import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProduct():Product{
    return new Product(0,"iPhone7",5899,"最新款苹果手机")
  }

}

export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public desc:string
  ){

  }
}