import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form/template-form.component';
import {AppComponent} from "./app.component";


//响应式表单需要引入ReactiveFormsModule
@NgModule({
  declarations: [
    TemplateFormComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
