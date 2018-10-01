"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var script1_1 = require("./script1");
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        var _this = _super.call(this) || this;
        _this.c = false;
        return _this;
    }
    B.prototype.metodo1 = function () {
        console.log("metodo2");
        return 1;
    };
    B.prototype.metodo2 = function () {
        console.log("metodo1");
    };
    return B;
}(script1_1.A));
var b = new B();
console.log(b);
var a = new B();
console.log(a);
