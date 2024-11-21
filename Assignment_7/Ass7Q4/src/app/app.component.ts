import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StringCaseComponent } from './string-case/string-case.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StringCaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ass7Q4';
}
