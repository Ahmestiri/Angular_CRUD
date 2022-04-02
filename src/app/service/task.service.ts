import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../component/tasks/interface/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  //----------------- Attributes ---------------------//
  private apiUrl = 'http://localhost:3000/tasks'
  //----------------- Default Methods ----------------//
  constructor(private http: HttpClient) { }
  //-------------------- Methods ---------------------//
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  deleteTask(task: Task): Observable<Task> {
    const deleteUrl = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(deleteUrl);
  }
  updateTaskReminder(task: Task): Observable<Task> {
    const updateUrl = `${this.apiUrl}/${task.id}`;
    return this.http.patch<Task>(updateUrl, task, httpOptions);
  }
}
