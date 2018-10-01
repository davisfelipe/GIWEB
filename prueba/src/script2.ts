import {A} from "./script1"
class B extends A{
    private c: Boolean
    constructor(){
        super()
        this.c=false
    }
    public metodo1(): Number{
        console.log("metodo2")
        return 1
    }
    public metodo2(): void{
        console.log("metodo1")
    }
}
const b: B = new B()
console.log(b)

const a: A= new B()
console.log(a)