import { TodosService } from './../servicees/todos.service';
import { Todos } from './../model/todos.type';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { FilterTodosPipe } from '../pipes/filter-todos.pipe';

@Component({
  selector: 'app-todos',
  imports: [FormsModule, FilterTodosPipe],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  template: '<h2>{{ filteredTodos() | json }}</h2>',
  styles: [
    `
      input {
        margin: 20px;
        padding: 10px 10px;
        font-size: 15px;
        color: white;
        background-color: black;
        outline: none;
        border: none;
        box-shadow: 0px 0px 10px white;
        border-radius: 5px;
      }
    `,
  ],
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todosItems = signal<Array<Todos>>([]);
  ppitems = signal<Array<Todos>>([]);
  // Example filter: only show completed todos
  filteredTodos = signal<Array<Todos>>([]);
  searchTerm = signal('');
  ngOnInit(): void {
    this.ppitems.set(this.todosService.peopleitems);
    this.todosService
      // get data From API
      .getTodosFromApi()
      // catch Error
      .pipe(
        catchError((r) => {
          console.log(r);
          throw r;
        })
      )
      // display Posistive Element
      .subscribe((todos) => {
        this.todosItems.set(todos);
        this.filteredTodos.set(
          todos.filter((fil) => {
            console.log(fil);
            return fil.postId === 6;
          })
        );
      });
  }
}
