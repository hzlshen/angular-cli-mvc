import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Product1Component} from "./product1/product1.component";
import {ProductService} from "./shared/product.service";
import {Product2Component} from './product2/product2.component';
import {LoggerService} from "./shared/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductService, LoggerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  xxx(event) {
    console.log(event);
  }
}


