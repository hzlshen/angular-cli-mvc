"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    //这两个方法 是在组件全部加载完成显示以后 才会被调用
    //不允许在视图组装好之后再去刷新这个视图的
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log("父组件的视图初始化完成");
        setTimeout(function () {
            _this.message = "hello";
        }, 0);
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        console.log("父组件的视图变更检测完成");
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.child1.greeting("Tom");
        }, 5000);
    };
    __decorate([
        core_1.ViewChild("child1")
    ], AppComponent.prototype, "child1");
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map