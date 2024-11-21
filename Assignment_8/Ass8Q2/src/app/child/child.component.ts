import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent 
{
  @Input() parentMessage : string = "";
  @Output() childMessage = new EventEmitter<string>();

  sendMessage(): void
  {
    this.childMessage.emit("Hello from Child...");
  }
}
