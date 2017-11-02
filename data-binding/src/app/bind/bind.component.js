"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BindComponent = (function () {
    //属性绑定
    //差值表达式和属性绑定 是一回事
    //只要编写代码的时候同一风格就可以了
    // imgUrl:string = "http://placehold.it/400x400"
    //
    // isBlog:boolean = false;
    // isDev:boolean = true;
    //
    // divStyle:any ={
    //   color:'red',
    //   background:'yellow'
    // };
    //
    // divClass:any = {
    //   a:true,
    //   b:false,
    //   c:false
    // };
    // size:number = 2;
    function BindComponent() {
        var _this = this;
        setTimeout(function () {
            // this.isBlog = true;
            // this.divClass ={
            //   a:false,
            //   b:true,
            //   c:true
            // };
            // this.isDev =false;
            //
            // this.divStyle ={
            //   color:'yellow',
            //   background:'red'
            // };
            _this.name = "MMp";
        }, 3000);
    }
    BindComponent.prototype.ngOnInit = function () {
    };
    BindComponent.prototype.doOnClick = function (event) {
        console.log(event);
    };
    BindComponent.prototype.doOnInput = function (event) {
        //打印的是他的dom属性
        //console.log(event.target.value);
        //HTML属性
        //console.log(event.target.getAttribute("value"));
        this.name = event.target.value;
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