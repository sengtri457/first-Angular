import { inject, Injectable } from '@angular/core';
import { Todos } from '../model/todos.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  peopleitems: Array<Todos> = [
    {
      id: 1,
      name: 'Bun sengtri',
    },
    {
      id: 3,
      name: 'Bun sengtri',
    },
    {
      id: 3,
      name: 'Bun sengtri',
    },
  ];

  http = inject(HttpClient);
  getTodosFromApi() {
    const url = 'https://jsonplaceholder.typicode.com/comments?postId=1';
    return this.http.get<Array<Todos>>(url);
  }
  constructor() {}
}
