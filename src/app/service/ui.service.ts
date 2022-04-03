import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  //----------------- Attributes ---------------------//
  private showAddTask: boolean = false;
  private subject = new Subject<any>();
  //----------------- Default Methods ----------------//
  constructor() { }
  //-------------------- Methods ---------------------//
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
