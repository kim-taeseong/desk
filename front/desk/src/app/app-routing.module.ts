import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './todos/todos.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  { path: 'todos', component: TodosComponent },
  { path: 'todos/:id', component: TodoComponent },
  { path: 'todo-form', component: TodoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
