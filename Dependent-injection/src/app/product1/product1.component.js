"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Product1Component = (function () {
    function Product1Component(productService) {
        this.productService = productService;
        this.name = "Tom";
    }
    Product1Component.prototype.ngOnInit = function () {
        this.product = this.productService.getProduct();
    };
    Product1Component = __decorate([
        core_1.Component({
            selector: 'app-product1',
            templateUrl: './product1.component.html',
            styleUrls: ['./product1.component.css']
        })
    ], Product1Component);
    return Product1Component;
}());
exports.Product1Component = Product1Component;
//# sourceMappingURL=product1.component.js.map