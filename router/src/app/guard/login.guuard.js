"use strict";
//路由守卫
//第一个场景：只有当用户已经登录并拥有某些权限时才能进入某些路由
//第二个场景：一个由多个表单组件组成的向导 例如注册
// 用户只有在当前路由的组件中填写了满足要求的信息才可以导航到下一个路由
//第三个场景  当用户未执行保存操作而试图离开当前导航时提醒用户
//CanActivate 进入需要满足要求
//处理导航到某路由的情况
//CanDeActivate 离开需要满足条件
//Resolve 在路由激活之前获取路由数据
var LoginGuard = (function () {
    function LoginGuard() {
    }
    LoginGuard.prototype.canActivate = function () {
        var loggedIn = Math.random() < 0.5;
        if (!loggedIn) {
            console.log("用户未登录");
        }
        return loggedIn;
    };
    return LoginGuard;
}());
exports.LoginGuard = LoginGuard;
//# sourceMappingURL=login.guuard.js.map