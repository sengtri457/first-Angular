import { TodosService } from './../servicees/todos.service';
import { Todos } from './../model/todos.type';
import { Component, inject, OnInit, signal } from '@angular/core';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css',
  template: '<h2>{{ filteredTodos() | json }}</h2>',
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todosItems = signal<Array<Todos>>([]);
  ppitems = signal<Array<Todos>>([]);
  // Example filter: only show completed todos
  filteredTodos = signal<Array<Todos>>([]);

  ngOnInit(): void {
    this.ppitems.set(this.todosService.peopleitems);
    this.todosService
      .getTodosFromApi()
      .pipe(
        catchError((r) => {
          console.log(r);
          throw r;
        })
      )
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
