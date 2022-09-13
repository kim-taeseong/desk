import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

import { Todo } from 'src/todo';
import { catchError, Observable, retry, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error(`error: ${error.error.message}`);
    } else {
      console.error(`backend error: ${error.status}, body: ${error.error}`);
    }
    return throwError(() => {
      const error: any = new Error('다시 요청하세요');
      return error
    });
  }

  url = 'api'
  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>(`${this.url}/todos/`)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  postTodo(todo: any): Observable<Todo> {
    return this.http.post<Todo>(`${this.url}/todos/`, todo)
      .pipe(
        catchError(this.handleError)
      )
  }
}
