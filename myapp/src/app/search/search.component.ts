import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  formModel:FormGroup;

  categories: string[];

  constructor(private productService:ProductService) {
    let fb = new FormBuilder();
    this.formModel = fb.group({
      title:['',Validators.minLength(3)],
      price:[null,this.positiveNumberValidator],
      category:['-1']
    });
  }

  ngOnInit() {
    this.categories = this.productService.getAllCategories();
  }

  positiveNumberValidator(control:FormControl):any{
    if(!control.value){
      return null;
    }
    let price = parseInt(control.value);

    if(price>0){
      return null;
    }else{
      return {positiveNumber:true};
    }
  }
  onSearch(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
    }
  }

}
