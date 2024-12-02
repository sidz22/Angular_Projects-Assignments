import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
  ChkPrime(num : number): boolean
  {
    if (num < 2)
      return false;

    for (let i = 2; i <= Math.sqrt(num); i++)
    {
      if (num % i == 0)
      {
        return false;
      }
    }
    return true;
  }
}
