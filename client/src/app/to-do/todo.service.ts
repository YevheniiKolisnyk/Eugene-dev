import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Task} from './todo.interface'

@Injectable({providedIn: 'root'})

export class TodoService {
  constructor(private http: HttpClient) {}

  fetch():Observable<Task[]> {
    return this.http.get<Task[]>('api/todo')
  }

  completeTask(id):Observable<Task> {
    return this.http.put<Task>(`api/todo/${id}`, {done: true})
  }

  delete():Observable<any> {
    return this.http.delete('api/todo')
  }

  create(title):Observable<Task> {
    return this.http.post<Task>('api/todo', title)
  }
}
