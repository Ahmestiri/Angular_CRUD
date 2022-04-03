import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  //--------------------- Attributes ----------------------//
  @Input() text = '';
  @Input() color = '';
  @Output() btnClick = new EventEmitter;
  //------------------- Default Methods -------------------//
  constructor() { }
  ngOnInit(): void {
  }
  //----------------------  Methods -----------------------//
  onClick() {
    this.btnClick.emit();
  }

}
