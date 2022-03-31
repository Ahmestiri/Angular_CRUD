import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //-------------------- Attributes -------------------//
  title: string = "Task Tracker";
  //----------------- Default Methods -----------------//
  constructor() { }
  ngOnInit(): void {
  }
  //--------------------  Methods ---------------------//
  addTask() {
    alert("Task to Be added");
  }

}
