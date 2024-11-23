import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk',
  standalone: true
})
export class MarvellousChkPipe implements PipeTransform 
{
  transform(value: number, param: string): string
  {
    if(param === 'Prime')
    {
      if(this.isPrime(value))
      {
        return `${value} It is Prime number`;
      }
      else
      {
        return `${value} It is Not Prime number`;
      }
    }
    if(param === 'Perfect')
    {
      if (this.isPerfect(value))
      {
        return `${value} It is Perfect number`;
      }
      else
      {
        return `${value} It is Not Perfect number`;
      }
    }

    if(param === 'Even')
    {
      if(value % 2 === 0)
      {
        return `${value} It is Even`;
      }
      else
      {
        return `${value} It is Not Even`;
      }
    }

    if(param === 'Odd')
    {
      if(value % 2 != 0)
      {
        return `${value} It is Odd`;
      }
      else
      {
        return `${value} It is not Odd`;
      }
    }
    return 'Invalid Parameter';
  }

  private isPrime(num : number): boolean
  {
    if(num <= 1)
      return false;
    for(let i = 2; i <= Math.sqrt(num); i++)
    {
      if(num % i === 0)
      {
        return false;
      }
    }
    return true;
  } 

  private isPerfect(num : number): boolean
  {
    let sum = 1;
    for(let i = 2; i <= Math.sqrt(num); i++)
    {
      if(num % i === 0)
      {
        sum += i;
        if(i != num / i)
        {
          sum += num / i;
        }
      }
    }
    return sum === num && num !== 1;
  }
}
