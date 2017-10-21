"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var navbar_component_1 = require('./navbar/navbar.component');
var footer_component_1 = require('./footer/footer.component');
var search_component_1 = require('./search/search.component');
var carousel_component_1 = require('./carousel/carousel.component');
var product_component_1 = require('./product/product.component');
var stars_component_1 = require('./stars/stars.component');
var product_detail_component_1 = require('./product-detail/product-detail.component');
var home_component_1 = require('./home/home.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                footer_component_1.FooterComponent,
                search_component_1.SearchComponent,
                carousel_component_1.CarouselComponent,
                product_component_1.ProductComponent,
                stars_component_1.StarsComponent,
                product_detail_component_1.ProductDetailComponent,
                home_component_1.HomeComponent
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map