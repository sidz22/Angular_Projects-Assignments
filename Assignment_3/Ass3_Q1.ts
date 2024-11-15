class Arithematic
{
    private Number1 : number
    private Number2 : number

    constructor(No1 : number, No2 : number)
    {
    this.Number1 = No1
    this.Number2 = No2
    }

    Addition() : number
    {
        return this.Number1 + this.Number2
    }

    Substraction() : number
    {
        return this.Number1 - this.Number2
    }

    Multiplication() : number
    {
        return this.Number1 * this.Number2
    }

    Division() : number
    {
        if(this.Number2 === 0)
        {
            throw new Error("Division by zero is not allowed")
        }
        return this.Number1 / this.Number2
    }
}

let obj1 = new Arithematic(20,10)
let obj2 = new Arithematic(15,5)

console.log("For obj1")
console.log("Addition:",obj1.Addition())
console.log("Substraction:",obj1.Substraction())
console.log("Multiplication:",obj1.Multiplication())
console.log("Division:",obj1.Division())

console.log("For obj2")
console.log("Addition:",obj2.Addition())
console.log("Substraction:",obj2.Substraction())
console.log("Multiplication:",obj2.Multiplication())
console.log("Division:",obj2.Division())