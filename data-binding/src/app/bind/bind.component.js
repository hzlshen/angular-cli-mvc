"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BindComponent = (function () {
    function BindComponent() {
        var _this = this;
        //属性绑定
        //差值表达式和属性绑定 是一回事
        //只要编写代码的时候同一风格就可以了
        this.imgUrl = "http://placehold.it/400x400";
        this.isBlog = false;
        this.isDev = true;
        this.divStyle = {
            color: 'red',
            background: 'yellow'
        };
        this.divClass = {
            a: true,
            b: false,
            c: false
        };
        this.size = 2;
        setTimeout(function () {
            _this.isBlog = true;
            _this.divClass = {
                a: false,
                b: true,
                c: true
            };
            _this.isDev = false;
            _this.divStyle = {
                color: 'yellow',
                background: 'red'
            };
        }, 3000);
    }
    BindComponent.prototype.ngOnInit = function () {
    };
    BindComponent.prototype.doOnClick = function (event) {
        console.log(event);
    };
    BindComponent.prototype.doOnInput = function (event) {
        //打印的是他的dom属性
        console.log(event.target.value);
        //HTML属性
        console.log(event.target.getAttribute("value"));
    };
    BindComponent = __decorate([
        core_1.Component({
            selector: 'app-bind',
            templateUrl: './bind.component.html',
            styleUrls: ['./bind.component.css']
        })
    ], BindComponent);
    return BindComponent;
}());
exports.BindComponent = BindComponent;
//# sourceMappingURL=bind.component.js.map