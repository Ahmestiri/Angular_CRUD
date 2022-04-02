import { Component, OnInit, Input } from '@angular/core';
import { Task } from 'src/app/mocks/Task';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  //-------------------- Attributes -------------------//
  @Input() task!: Task;
  //----------------- Default Methods -----------------//
  constructor() { }
  ngOnInit(): void {
  }

}
