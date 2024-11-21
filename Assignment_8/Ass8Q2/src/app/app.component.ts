import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  messageFromParent: string = "Hello from Parent";
  messageFromChild : string = "";

  receiveMessage(message : string): void
  {
    this.messageFromChild = message;
  }
}