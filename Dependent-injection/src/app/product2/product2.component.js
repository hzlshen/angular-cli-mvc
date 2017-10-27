"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Product2Component = (function () {
    function Product2Component(productService) {
        this.productService = productService;
    }
    Product2Component.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct();
    };
    Product2Component = __decorate([
        core_1.Component({
            selector: 'app-product2',
            templateUrl: './product2.component.html',
            styleUrls: ['./product2.component.css']
        })
    ], Product2Component);
    return Product2Component;
}());
exports.Product2Component = Product2Component;
//# sourceMappingURL=product2.component.js.map