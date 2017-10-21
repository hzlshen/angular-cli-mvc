"use strict";
//执行了保存操作才能离开当前页面
var UnsavedGuard = (function () {
    function UnsavedGuard() {
    }
    UnsavedGuard.prototype.canDeactivate = function (component) {
        return window.confirm("你还没有保存，确定要离开么？");
    };
    return UnsavedGuard;
}());
exports.UnsavedGuard = UnsavedGuard;
//# sourceMappingURL=unsaved-guard.js.map