function ChkArmstrong(value : number): void

{
    let temp = value
    let sum = 0

    while (temp > 0)
    {
        let remainder = temp % 10
        sum += remainder * remainder * remainder
        temp = (temp / 10) | 0
    }

    if (sum == value)
    {
        console.log("It is Armstrong Number",value)
    }
    else
    {
        console.log("It is not an Armstrong number",value)
    }
}

const number = 154
ChkArmstrong(number)