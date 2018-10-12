import NodeRSA from 'node-rsa'

class Llave{
    private llave: NodeRSA
    constructor(){
        this.llave= new NodeRSA()
    }
    public obtenerLlave(): Number{
        console.log("Que tranzas")
        return 5
    }
}