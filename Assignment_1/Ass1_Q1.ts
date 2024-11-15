function Maximum(num1: number, num2: number,num3: number,): number
{
    let Max = num1

    if (num2 > Max)
    {
        Max = num2
    }
    if (num3 > Max)
    {
        Max = num3
    }
    return Max
}

const MaxNumber = Maximum(23, 89, 6)
console.log("Maximum number is ",MaxNumber)
