import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/component/tasks/interface/Task';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  //-------------------- Attributes -------------------//
  tasks: Task[] = [];
  //----------------- Default Methods -----------------//
  constructor(private taskService: TaskService) { }
  //---------------------  Methods --------------------//
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  deleteTask(task: Task): void {
    this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id));
  }
  taskReminder(task: Task): void {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

}
