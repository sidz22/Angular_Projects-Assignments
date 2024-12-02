import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
  CountCapital(str : string) : number
  {
    let upper = 0;
    for (let i = 0; i < str.length; i++)
    {
      if (str[i] >= 'A' && str[i] <= 'Z')
      {
        upper++;
      }
    }
    return upper;
  }
}
