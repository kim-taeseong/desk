import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../data.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todoForm = this.formBuilder.group({
    todo: ['']
  })

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private location: Location, private router: ActivatedRoute) { }

  ngOnInit(): void {
  }

  postTodo() {
    // console.log(this.todoForm.value);
    this.dataService.postTodo(this.todoForm.value)
      .subscribe(todo => {
        console.log(todo);
        this.location.back();
      })
  }

}
