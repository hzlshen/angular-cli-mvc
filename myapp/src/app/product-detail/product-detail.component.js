"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProductDetailComponent = (function () {
    function ProductDetailComponent(routeInfo, productService) {
        this.routeInfo = routeInfo;
        this.productService = productService;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var productId = this.routeInfo.snapshot.params["productId"];
        this.product = this.productService.getProduct(productId);
    };
    ProductDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-product-detail',
            templateUrl: './product-detail.component.html',
            styleUrls: ['./product-detail.component.css']
        })
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map