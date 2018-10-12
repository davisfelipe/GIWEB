import NodeRSA from 'node-rsa'
class Comunicador{
  private llavesPersonales:NodeRSA
  private llavesInvitado:NodeRSA
  constructor(){
    this.llavesPersonales=new NodeRSA({b:512})
    this.llavesInvitado=new NodeRSA()
  }
  public ingresarLlaveInvitado(llave:string){
    this.llavesInvitado.importKey(llave)
  }
  public obtenerLlavePublica():string{
    return this.llavesPersonales.exportKey("public")
  }
  public decir(mensaje:string){
    return this.llavesPersonales.encryptPrivate(mensaje)
  }
  public repetir(mensaje:any):string{
    return this.llavesInvitado.decryptPublic(mensaje,"utf8")
  }
}
export default{Comunicador}
