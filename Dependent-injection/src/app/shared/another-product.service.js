"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var product_service_1 = require("./product.service");
var AnotherProductService = (function () {
    function AnotherProductService(logger) {
        this.logger = logger;
    }
    AnotherProductService.prototype.getProduct = function () {
        return new product_service_1.Product(1, "sumsung7", 4899, "最新款三星手机");
    };
    AnotherProductService = __decorate([
        core_1.Injectable()
    ], AnotherProductService);
    return AnotherProductService;
}());
exports.AnotherProductService = AnotherProductService;
//# sourceMappingURL=another-product.service.js.map