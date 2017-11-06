import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import {FormsModule} from '@angular/forms';
import { PriceQuoteeComponent } from './price-quotee/price-quotee.component';
@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    PriceQuoteeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
