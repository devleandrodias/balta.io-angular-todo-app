import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = 'Minha lista de tarefas!';

  public form: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this.form = this._formBuilder.group({
      title: [
        'Insira sua tarefa',
        Validators.compose([
          Validators.minLength(3),
          Validators.maxLength(60),
          Validators.required,
        ]),
      ],
    });
    this.todos.push(new Todo(1, 'Ir ao mercado', false));
    this.todos.push(new Todo(2, 'Cortar cabelo', false));
    this.todos.push(new Todo(3, 'Estudar Angular', true));
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));
    this.clear();
  }

  clear() {
    this.form.reset();
  }

  remove(todo: Todo): void {
    const index = this.todos.indexOf(todo);

    if (index !== -1) this.todos.splice(index, 1);
  }

  markAsDone = (todo: Todo) => (todo.done = true);

  markAsUndone = (todo: Todo) => (todo.done = false);

  /**
   * () = HTML > TS
   * [] = TS > HTML
   * [()] = TS <> HTML
   */
}
