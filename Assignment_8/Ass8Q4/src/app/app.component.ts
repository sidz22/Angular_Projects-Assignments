import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
{
  stringLength : number = 0;

  updateLength(event : Event):void
  {
    const inputElement = event.target as HTMLInputElement;
    this.stringLength = inputElement.value.length; 
  }
}
