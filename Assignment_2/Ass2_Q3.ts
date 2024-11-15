function Maximum(numbers: number[]): number
{
    if (numbers.length < 2)
    {
        throw new Error("Array must contain at least two numbers")
    }

    let Max = Math.max(numbers[0], numbers[1])
    let SecondMax = Math.min(numbers[0], numbers[1])

    for (let i = 2; i < numbers.length; i++) 
    {
        if (numbers[i] > Max)
        {
            SecondMax = Max
        
            Max = numbers[i]
        }
        else if(numbers[i] > SecondMax && numbers[i] < Max)
        {
            SecondMax = numbers[i]
        }
    }
    if (SecondMax == -Infinity)
    {
        throw new Error("There is no second Maximum number in the Array")
    }
    return SecondMax
}

const numbers = [23, 89, 6, 29, 56, 77, 45, 32]
const SecondMaxNumber = Maximum(numbers)
console.log("Second Maximum number is ",SecondMaxNumber)
