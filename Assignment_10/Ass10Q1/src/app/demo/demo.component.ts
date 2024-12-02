import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent
{
  public additionResult : number;
  public substrationResult : number;

  public constructor (private arithmeticobj : ArithmeticService)
  {
    const num1 = 10;
    const num2 = 5;
  
  this.additionResult = this.arithmeticobj.add(num1, num2);
  this.substrationResult = this.arithmeticobj.sub(num1, num2);
  
  }
}
