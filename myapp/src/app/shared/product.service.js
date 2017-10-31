"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ProductService = (function () {
    function ProductService() {
        this.products = [
            new Product(1, "第一个商品", 1.99, 2.5, "这是一个商品Helloo word", ["电子产品", "硬件设备"]),
            new Product(2, "第二个商品", 8.49, 4.5, "这是二个商品Helloo word", ["图书", "硬件设备"]),
            new Product(3, "第三个商品", 7.09, 1.5, "这是三个商品Helloo word", ["服装", "硬件设备"]),
            new Product(4, "第四个商品", 6.39, 2.5, "这是四个商品Helloo word", ["线下", "硬件设备"]),
            new Product(5, "第五个商品", 5.49, 2.5, "这是五个商品Helloo word", ["你好", "硬件设备"]),
            new Product(6, "第六个商品", 3.69, 3.5, "这是六个商品Helloo word", ["电子产品", "硬件设备"])
        ];
        this.comments = [
            new Comment(1, 1, "2017-02-20 22:13:22", "张三", 3, "东西不错"),
            new Comment(2, 1, "2017-01-25 23:23:22", "李四", 4, "东西是不错"),
            new Comment(3, 1, "2017-03-10 21:29:22", "王五", 2, "东西挺不错"),
            new Comment(4, 2, "2017-04-06 20:22:22", "隔壁", 5, "东西可以不错"),
        ];
    }
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.getProduct = function (id) {
        return this.products.find(function (product) { return product.id == id; });
    };
    ProductService.prototype.getCommentsForProductId = function (id) {
        return this.comments.filter(function (comment) { return comment.productId == id; });
    };
    ProductService = __decorate([
        core_1.Injectable()
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
var Product = (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=product.service.js.map