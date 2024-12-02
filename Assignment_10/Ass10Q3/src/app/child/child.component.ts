import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  primeResult : string = "";
  capitalCountResult : string = "";

  constructor(private numberobj : NumberService, private stringObj : StringService)
  {
    this.checkPrime();
    this.countCapitals();
  }

  checkPrime() : void
  {
    const num = 29;
    if (this.numberobj.ChkPrime(num))
    {
      this.primeResult = num + " is a Prime number.";
    }
    else
    {
      this.primeResult = num + " is not a prime number.";
    }
  }

  countCapitals() : void
  {
    const str = "MarvellousINFOSYSTEMS";
    const capitalCount = this.stringObj.CountCapital(str);
    this.capitalCountResult = "The String " + str + " has " + capitalCount + " capital letters. ";
  }
}
