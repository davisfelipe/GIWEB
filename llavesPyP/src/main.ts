import NodeRSA from 'node-rsa'
import Com from "./comunicador"
let com1=new Com.Comunicador()
let com2=new Com.Comunicador()
com1.ingresarLlaveInvitado(com2.obtenerLlavePublica())
com2.ingresarLlaveInvitado(com1.obtenerLlavePublica())
console.log(com2.decir("hola amigos"))
console.log(com1.decir("como estan"))
console.log(com1.repetir(com2.decir("hola amigos")))
console.log(com2.repetir(com1.decir("como estan"))

//console.log(com1.desencriptar(com2.encriptar("hola amigos")))