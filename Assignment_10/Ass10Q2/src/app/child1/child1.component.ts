import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child1',
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component 
{
  result : string = '';

  constructor(private numberobj : NumberService)
  {
    this.checkPrime();
  }

  checkPrime() : void
  {
    const num = 29;
    const isPrime = this.numberobj.ChkPrime(num);
    if (isPrime)
    {
      this.result = num + " is a prime number.";
    }
    else
    {
      this.result = num + " is not a prime number.";
    }
  }
}