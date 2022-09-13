import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Todo } from 'src/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.dataService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

}
