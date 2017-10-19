"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var SellerInfoComponent = (function () {
    function SellerInfoComponent() {
    }
    SellerInfoComponent.prototype.ngOnInit = function () {
    };
    SellerInfoComponent = __decorate([
        core_1.Component({
            selector: 'app-seller-info',
            templateUrl: './seller-info.component.html',
            styleUrls: ['./seller-info.component.css']
        })
    ], SellerInfoComponent);
    return SellerInfoComponent;
}());
exports.SellerInfoComponent = SellerInfoComponent;
//# sourceMappingURL=seller-info.component.js.map