import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public todos: any[] = [];

  constructor() {
    this.todos.push('ReactJS');
    this.todos.push('Flutter');
    this.todos.push('Angular');
    this.todos.push('Azure');
    this.todos.push('ASP.Net Core 5.0');
  }
}
