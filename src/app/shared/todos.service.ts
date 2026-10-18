import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { Todo } from './todo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService extends BaseService {

  constructor(private http: HttpClient) {
    super('todos');
  }

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

  get(id: string): Observable<Todo> {
    return this.http.get<Todo>(`${this.apiUrl}/${id}`);
  }

  update(todo: Todo): Observable<Todo> {
    console.log(`${this.apiUrl}/${todo.id}`);
    return this.http.put<Todo>(`${this.apiUrl}/${todo.id}`, todo);
  }

  create(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.apiUrl, todo);
  }
}
