function Summation(numbers: number[]): number 
{
    let sum = 0;
    for (let num of numbers) 
    {
        sum += num;
    }
    return sum;
}

// Example usage:
const DataArray = [23, 6, 7, 4, 5, 7]
const result = Summation(DataArray)
console.log("Addition is", result)
