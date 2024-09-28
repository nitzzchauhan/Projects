import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';  // Import the directive

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  imports: [HighlightDirective]  // Import the directive directly into the component
})
export class AppComponent {
  title = 'Standalone Angular App';
}
