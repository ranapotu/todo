import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  task!: string;

  todos: string[] = [];

  submit() {
    console.log(this.task);
    this.todos.push(this.task);
    this.task = '';
  }

  delete(i: number) {
    this.todos.splice(i, 1);
  }

  deleteAll() {
    console.log('Del all clicked');

    this.todos.splice(0, this.todos.length);
    this.task = '';
    console.log(this.todos);
  }
}
