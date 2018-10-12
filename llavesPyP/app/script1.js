"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_rsa_1 = __importDefault(require("node-rsa"));
var llave1 = new node_rsa_1.default({ b: 512 });
var llave2 = new node_rsa_1.default({ b: 512 });
//llave1.importKey(privada1,"private")
//llave1.importKey(publica1,"public")
llave2.importKey(llave1.exportKey("public"));
var encriptado = llave1.encryptPrivate("Chinque el america");
console.log(encriptado, "utf8");
var desencriptado = llave2.decryptPublic(encriptado, "utf8");
console.log(desencriptado);
