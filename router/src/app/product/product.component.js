"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProductComponent = (function () {
    function ProductComponent(routeInfo) {
        this.routeInfo = routeInfo;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        //参数订阅
        this.routeInfo.params.subscribe(function (params) { return _this.productId = params["id"]; });
        this.routeInfo.data.subscribe(function (data) {
            _this.productId = data.product.id;
            _this.productName = data.product.name;
        });
        //参数快照
        //this.productId = this.routeInfo.snapshot.params["id"];
    };
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
var Product = (function () {
    function Product(id, name) {
        this.id = id;
        this.name = name;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.component.js.map