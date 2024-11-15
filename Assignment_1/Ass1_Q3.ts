function DisplayFactors(num : number): void
{
    console.log(`Factors of ${num} are :`)

    for (let i = 1; i<= num / 2; i++)
    {
        if(num % i === 0)
        {
            console.log(i)
        }
    }
}

let number : number = 20
DisplayFactors(number)