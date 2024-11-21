import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: 'app-root',
    imports: [RouterOutlet, ChildComponent,FormsModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent 
{
  receivedData : string = '';

  receiveData(data : string) : void
  {
    this.receivedData = data;
  }
}
