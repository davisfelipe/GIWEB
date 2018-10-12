"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_rsa_1 = __importDefault(require("node-rsa"));
var Comunicador = /** @class */ (function () {
    function Comunicador() {
        this.llavesPersonales = new node_rsa_1.default({ b: 512 });
        this.llavesInvitado = new node_rsa_1.default();
    }
    Comunicador.prototype.ingresarLlaveInvitado = function (llave) {
        this.llavesInvitado.importKey(llave);
    };
    Comunicador.prototype.obtenerLlavePublica = function () {
        return this.llavesPersonales.exportKey("public");
    };
    Comunicador.prototype.decir = function (mensaje) {
        return this.llavesPersonales.encryptPrivate(mensaje);
    };
    Comunicador.prototype.repetir = function (mensaje) {
        return this.llavesInvitado.decryptPublic(mensaje, "utf8");
    };
    return Comunicador;
}());
exports.default = { Comunicador: Comunicador };
