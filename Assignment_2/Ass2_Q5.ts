function ChkString(input : string): void
{
    const searchstring = "Marvellous"
    
    for (let i = 0; i <= input.length - searchstring.length ; i++)
    {
        if (input.substring(i, i + searchstring.length) == searchstring)
        {
            console.log("String contains 'Marvellous' in it")

            return
        }
    }
    console.log("String does not contain 'Marvellous'")
}

const inputString = "Pune Kothrud Marvellous Infosystems"
ChkString(inputString)