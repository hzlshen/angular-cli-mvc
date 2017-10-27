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
var product1_component_1 = require('./product1/product1.component');
var product_service_1 = require("./shared/product.service");
var product2_component_1 = require('./product2/product2.component');
var logger_service_1 = require("./shared/logger.service");
var another_product_service_1 = require("./shared/another-product.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product1_component_1.Product1Component,
                product2_component_1.Product2Component
            ],
            imports: [
                platform_browser_1.BrowserModule
            ],
            providers: [{
                    provider: product_service_1.ProductService,
                    useFactory: function () {
                        var logger = new logger_service_1.LoggerService();
                        var dev = Math.random() > 0.5;
                        if (dev) {
                            return new product_service_1.ProductService(logger);
                        }
                        else {
                            return new another_product_service_1.AnotherProductService(logger);
                        }
                    }
                }, logger_service_1.LoggerService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map