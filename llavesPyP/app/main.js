"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var comunicador_1 = __importDefault(require("./comunicador"));
var com1 = new comunicador_1.default.Comunicador();
var com2 = new comunicador_1.default.Comunicador();
com1.ingresarLlaveInvitado(com2.obtenerLlavePublica());
com2.ingresarLlaveInvitado(com1.obtenerLlavePublica());
console.log(com2.decir("hola amigos"));
console.log(com1.decir("como estan"));
console.log(com1.repetir(com2.decir("hola amigos")));
console.log(com2.repetir(com1.decir("como estan")));
//console.log(com1.desencriptar(com2.encriptar("hola amigos")))
