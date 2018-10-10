"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_rsa_1 = __importDefault(require("node-rsa"));
var key = new node_rsa_1.default({ b: 512 });
var text = "Hola Amigos";
var keyData = "-----BEGIN CERTIFICATE-----MIHgMIGaAgEBMA0GCSqG...-----END CERTIFICATE-----";
var privado = key.exportKey('pkcs1-der');
console.log(privado);
