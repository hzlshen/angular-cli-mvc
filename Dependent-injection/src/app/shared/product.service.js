"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProductService = (function () {
    function ProductService(logger) {
        this.logger = logger;
    }
    ProductService.prototype.getProduct = function () {
        this.logger.log("getProduct方法被调用");
        return new Product(0, "iPhone7", 5899, "最新款苹果手机");
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var Product = (function () {
    function Product(id, title, price, desc) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.desc = desc;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.service.js.map