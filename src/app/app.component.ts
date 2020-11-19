import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minhas tecnologias';

  constructor() {
    this.todos.push(new Todo(1, 'Ir ao mercado', false));
    this.todos.push(new Todo(2, 'Cortar cabelo', false));
    this.todos.push(new Todo(3, 'Estudar Angular', true));
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);

    if (index !== -1) this.todos.splice(index, 1);
  }

  markAsDone(todo: Todo) {}

  markAdUndone(todo: Todo) {}

  /**
   * () = HTML > TS
   * [] = TS > HTML
   * [()] = TS <> HTML
   */
}
