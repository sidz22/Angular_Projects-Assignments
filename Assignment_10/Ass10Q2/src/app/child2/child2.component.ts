import { Component } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component 
{
  result : string = '';

  constructor(private stringObj : StringService)
  {
    this.countCapitals();
  }

  countCapitals() : void
  {
    const str = "MarvellousINFOSYSTEMS";
    const capitalCount = this.stringObj.CountCapital(str);
    this.result = "The string " + str + " have " + capitalCount + " Capital letters.";
  }
}
