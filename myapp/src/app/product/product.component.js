"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var ProductComponent = (function () {
    function ProductComponent(productService) {
        var _this = this;
        this.productService = productService;
        this.titleFolter = new forms_1.FormControl();
        this.titleFolter.valueChanges
            .debounceTime(500)
            .subscribe(function (value) { return _this.keyword = value; });
    }
    //组件生命周期钩子
    //这个方法会在组件实例化后调用一次
    ProductComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getProducts();
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
//# sourceMappingURL=product.component.js.map