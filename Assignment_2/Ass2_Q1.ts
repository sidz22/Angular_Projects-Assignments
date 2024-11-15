function Maximum(numbers: number[]): number
{
    let Max = numbers[0];

    for (let i = 1; i < numbers.length; i++) 
    {
        if (numbers[i] > Max) 
        {
            Max = numbers[i];
        }
    }
    return Max;
}

const numbers = [23, 89, 6, 29, 56, 45, 77, 32];
const MaxNumber = Maximum(numbers);
console.log("Maximum number is ",MaxNumber);
