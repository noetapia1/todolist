import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {


  newTask:string ="";
  todo:Todo;

  constructor() { }

  @Output() addTask:EventEmitter<Todo> = new EventEmitter<Todo>();

  submitButton():void{
    this.todo={task:this.newTask, completed:false};
    this.addTask.emit(this.todo);
    this.newTask="";
  }


  ngOnInit() {
  }

}
