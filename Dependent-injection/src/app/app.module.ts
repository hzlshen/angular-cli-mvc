import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {Product1Component} from "./product1/product1.component";
import {ProductService} from "./shared/product.service";
import {Product2Component} from './product2/product2.component';
import {LoggerService} from "./shared/logger.service";
import {AnotherProductService} from "./shared/another-product.service";

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
<<<<<<< HEAD
  providers: [{
    provide: ProductService,
    useFactory: (logger:LoggerService, appConfig) => {
      if(appConfig.isDev){
        return new ProductService(logger);
      }else{
        return new AnotherProductService(logger);
      }
    },
    deps:[LoggerService, "APP_CONFIG"]
  }, LoggerService,
    {
      provide: "APP_CONFIG", useValue: {isDev: false}
    }
  ],
=======
  providers: [ProductService,LoggerService],
>>>>>>> parent of 7d5be83... 工厂模式实现
  bootstrap: [AppComponent]
})
export class AppModule {

  xxx(event) {
    console.log(event);
  }
}

