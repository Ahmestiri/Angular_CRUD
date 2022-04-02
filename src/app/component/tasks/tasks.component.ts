import { Component, OnInit } from '@angular/core';
import { TASKS } from 'src/app/mocks/mock-tasks';
import { Task } from 'src/app/mocks/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //-------------------- Attributes -------------------//
  tasks: Task[] = TASKS;
  //----------------- Default Methods -----------------//
  constructor() { }
  ngOnInit(): void {
  }

}
