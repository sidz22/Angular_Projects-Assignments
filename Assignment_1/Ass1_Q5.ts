function Fibonacci(num : number): void
{
    let a = 0, b = 1
    if(num >= 1)
    {
        console.log(a)
    }
    if(num >= 2)
    {
        console.log(b)
    }

    let next
    while(true)
    {
        next = a+b;
        if(next > num)
        {
            break
        }
        console.log(next)
        a = b
        b = next
    }
}

let number : number = 21
Fibonacci(number)