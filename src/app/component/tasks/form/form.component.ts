import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../interface/Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  //-------------------- Attributes -------------------//
  text: string = "";
  day: string = "";
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter;
  showAddTask: boolean = false;
  subscription: Subscription;
  //----------------- Default Methods -----------------//
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }
  ngOnInit(): void {
  }
  //---------------------  Methods --------------------//
  onSubmit() {
    //Form Validation
    if (!this.text) {
      alert("Please input the Task name");
      return;
    }
    if (!this.day) {
      alert("Please input the Task day");
      return;
    }
    //Creation of Object
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
    //Event Emitter
    this.onAddTask.emit(newTask);
    //bject Clearance
    this.text = "";
    this.day = "";
    this.reminder = false;
  }
  showaddTask() {
    this.uiService.toggleAddTask();
  }

}
