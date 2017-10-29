"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var product1_component_1 = require("./product1/product1.component");
var product_service_1 = require("./shared/product.service");
var product2_component_1 = require('./product2/product2.component');
var logger_service_1 = require("./shared/logger.service");
var another_product_service_1 = require("./shared/another-product.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule.prototype.xxx = function (event) {
        console.log(event);
    };
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                product1_component_1.Product1Component,
                product2_component_1.Product2Component
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
<<<<<<< HEAD
            providers: [{
                    provide: product_service_1.ProductService,
                    useFactory: function (logger, appConfig) {
                        if (appConfig.isDev) {
                            return new product_service_1.ProductService(logger);
                        }
                        else {
                            return new another_product_service_1.AnotherProductService(logger);
                        }
                    },
                    deps: [logger_service_1.LoggerService, "APP_CONFIG"]
                }, logger_service_1.LoggerService,
                {
                    provide: "APP_CONFIG", useValue: { isDev: false }
                }
            ],
=======
            providers: [product_service_1.ProductService, logger_service_1.LoggerService],
>>>>>>> parent of 7d5be83... 工厂模式实现
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map