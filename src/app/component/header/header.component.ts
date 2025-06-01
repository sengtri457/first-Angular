import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
// import { TodosService } from '../../servicees/todos.service';

@Component({
  selector: 'app-header',
  template: `<h1>{titleHeader}</h1>`,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  // providers: [TodosService],
})
export class HeaderComponent {
  titleHeader = 'Hello Home';
  title = signal('Hello');
}
