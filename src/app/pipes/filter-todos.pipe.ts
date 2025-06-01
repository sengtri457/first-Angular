import { Todos } from './../model/todos.type';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTodos',
})
export class FilterTodosPipe implements PipeTransform {
  transform(todos: Todos[], searchTerm: string): Todos[] {
    if (!searchTerm) {
      return todos;
    }
    const text = searchTerm.toLowerCase();
    return todos.filter((e) => {
      return e.body?.toLowerCase().includes(text);
    });
  }
}
