"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var PriceQuoteeComponent = (function () {
    function PriceQuoteeComponent() {
        var _this = this;
        this.stockCode = "IBM";
        this.lastPrice = new core_1.EventEmitter();
        this.buy = new core_1.EventEmitter();
        setInterval(function () {
            var priceQuotee = new PriceQuote(_this.stockCode, 100 * Math.random());
            _this.price = priceQuotee.lastPrice;
            _this.lastPrice.emit(priceQuotee);
        }, 1000);
    }
    PriceQuoteeComponent.prototype.buyStock = function ($event) {
        this.buy.emit(new PriceQuote(this.stockCode, this.price));
    };
    PriceQuoteeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Output('priceChange')
    ], PriceQuoteeComponent.prototype, "lastPrice");
    __decorate([
        core_1.Output()
    ], PriceQuoteeComponent.prototype, "buy");
    PriceQuoteeComponent = __decorate([
        core_1.Component({
            selector: 'app-price-quotee',
            templateUrl: './price-quotee.component.html',
            styleUrls: ['./price-quotee.component.css']
        })
    ], PriceQuoteeComponent);
    return PriceQuoteeComponent;
}());
exports.PriceQuoteeComponent = PriceQuoteeComponent;
var PriceQuote = (function () {
    function PriceQuote(stockCode, lastPrice) {
        this.stockCode = stockCode;
        this.lastPrice = lastPrice;
    }
    return PriceQuote;
}());
exports.PriceQuote = PriceQuote;
//# sourceMappingURL=price-quotee.component.js.map