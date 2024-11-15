class Circle
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
}

let Circle1 = new Circle(5)
let Circle2 = new Circle(10)

console.log("Area of Circle1 :",Circle1.Area())
console.log("Area of Circle2 :",Circle2.Area())
