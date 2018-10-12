"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_rsa_1 = __importDefault(require("node-rsa"));
var Llave = /** @class */ (function () {
    function Llave() {
        this.llave = new node_rsa_1.default();
    }
    Llave.prototype.obtenerLlave = function () {
        console.log("Que tranzas");
        return 5;
    };
    return Llave;
}());
