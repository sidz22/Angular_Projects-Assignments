function ChkPrime(num : number): boolean
{
    if(num <= 1)
    {
        return false
    }
    for(let i = 2; i * i <= num; i++)
    {
        if(num % i === 0)
        {
            return false
        }
    }
    return true
}

let number : number = 11
if(ChkPrime(number))
{
    console.log("It is a prime number")
}
else
{
    console.log("It is not a prime number")
}
