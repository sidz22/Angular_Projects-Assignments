import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-child',
    imports: [],
    templateUrl: './child.component.html',
    styleUrl: './child.component.css'
})
export class ChildComponent 
{
  childText : string = '';

    @Output() sendToParent = new EventEmitter<string>();

    sendData() : void
    {
      this.sendToParent.emit(this.childText);
    }
}
