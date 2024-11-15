class CircleX
{
    private Radius : number
    private PI : number = 3.14

    constructor(radius : number)
    {
        this.Radius = radius
    }

    Area() : number
    {
        return this.PI * this.Radius * this.Radius
    }
    Circumference() : number
    {
        return 2 * this.PI * this.Radius
    }
}

let CircleX1 = new CircleX(5)
let CircleX2 = new CircleX(10)

console.log("For CircleX1 :")
console.log("Area :",CircleX1.Area())
console.log("Circumference :",CircleX1.Circumference())

console.log("For CircleX2 :")
console.log("Area of Circle2 :",CircleX2.Area())
console.log("Circumference :",CircleX2.Circumference())

