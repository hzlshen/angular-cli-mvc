"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ChildComponent = (function () {
    function ChildComponent() {
    }
    //这两个方法 是在组件全部加载完成显示以后 才会被调用
    ChildComponent.prototype.ngAfterViewInit = function () {
        console.log("子组件的视图初始化完成");
    };
    ChildComponent.prototype.ngAfterViewChecked = function () {
        console.log("子组件的视图变更检测完成");
    };
    ChildComponent.prototype.ngOnInit = function () {
    };
    ChildComponent.prototype.greeting = function (name) {
        console.log("hello" + name);
    };
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'app-child',
            templateUrl: './child.component.html',
            styleUrls: ['./child.component.css']
        })
    ], ChildComponent);
    return ChildComponent;
}());
exports.ChildComponent = ChildComponent;
//# sourceMappingURL=child.component.js.map