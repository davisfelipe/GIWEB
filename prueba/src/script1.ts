interface IS{
    metodo2(): void
}
abstract class A implements IS{
    private a: String
    private b: Number
    constructor(){
        this.a="Nombre"
        this.b=22
    }
    abstract metodo1(): Number
    public metodo2(): void{
        console.log(this.a)
    }
}
export{A}