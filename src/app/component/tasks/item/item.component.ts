import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/component/tasks/interface/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //-------------------- Attributes -------------------//
  @Input() task!: Task;
  faTimes = faTimes;
  @Output() btnClick: EventEmitter<Task> = new EventEmitter;
  @Output() btnDblClick: EventEmitter<Task> = new EventEmitter;
  //----------------- Default Methods -----------------//
  constructor() { }
  ngOnInit(): void { }
  //--------------------  Methods ---------------------//
  onDelete(task: Task) {
    this.btnClick.emit(task);
  }
  onReminder(task: Task) {
    this.btnDblClick.emit(task);
  }

}
