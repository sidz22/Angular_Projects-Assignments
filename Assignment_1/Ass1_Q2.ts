function Area(radius: number, PI: number = 3.14): number
{
    return PI * radius * radius;
}

let radius: number = 5
let AreaOfCircle = Area(radius)
console.log("Area of circle is ",AreaOfCircle) 
