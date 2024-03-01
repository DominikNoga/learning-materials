import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private taskUrl: string = "http://localhost:5000/tasks";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getTasks$ = this.getTasks().pipe(
    shareReplay(1)
  )

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.taskUrl);
  };

  deleteTask(taskId: number): Observable<Task> {
    return this.http.delete<Task>(`${this.taskUrl}/${taskId}`);
  };

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.taskUrl, task, this.httpOptions);
  };

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.taskUrl}/${task.id}`, task, this.httpOptions);
  };
}
