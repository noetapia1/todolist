import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo'


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo:Todo
  @Output() taskCompleted: EventEmitter<void> = new EventEmitter<void>();
  @Output() removeTask: EventEmitter<void> = new EventEmitter<void>();
  
  constructor() { }

  completeTaskButton():void{
    this.taskCompleted.emit();
  }

  xButton():void{
    this.removeTask.emit();
  }

  completeButtonStyle:object ={
    'color': '#ff69b4',
    'border': '1px solid #ff69b4',
    'background':'white',
    'border-radius': '12px'
  }

  ngOnInit() {
  }

}
