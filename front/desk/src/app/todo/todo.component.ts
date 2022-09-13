import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Todo } from 'src/todo';
import { Location } from '@angular/common';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Todo | undefined;

  todoForm = this.formBuilder.group({
    todo: ['']
  })

  constructor(private router: ActivatedRoute, private dataService: DataService, private formBuilder: FormBuilder, private location: Location) { }

  ngOnInit(): void {
    this.getTodo();
  }
  
  getTodo() {
    // if id
    const id = Number(this.router.snapshot.paramMap.get('id'))
    this.dataService.getTodo(id)
      .subscribe(todo => {
        this.todo = todo;
        console.log(todo);
        this.todoForm.setValue({todo: todo.todo});
      });
  }

  updateTodo() {
    const id = Number(this.router.snapshot.paramMap.get('id'))
    this.dataService.updateTodo(this.todoForm.value, id)
      .subscribe(todo => {
        console.log(todo);
        this.location.back();
      })
  }
}
