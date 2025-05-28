import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseComponent } from './Course.component';
import { HeaderComponent } from './component/header/header.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  styles: [
    `
      h1 {
        color: blue;
        text-align: center;
      }
    `,
  ],
})
export class AppComponent {
  title = 'Angular app';
}
