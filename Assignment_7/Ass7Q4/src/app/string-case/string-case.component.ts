import { Component } from '@angular/core';

@Component({
  selector: 'app-string-case',
  standalone: true,
  imports: [],
  templateUrl: './string-case.component.html',
  styleUrl: './string-case.component.css'
})
export class StringCaseComponent 
{
  public string = 'Marvellous Infosystems';

  toUpperCase()
  {
    this.string = this.string.toUpperCase();
  }

  toLowerCase()
  {
    this.string = this.string.toLowerCase();
  }
}
