import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  filterInTS:string="";

  constructor() { }
  todoList:Todo[]=[
    {task: "laundry", completed: true},
    {task: "folding clothes", completed: false},
    {task: "dinner", completed: true},
    {task: "homework", completed: false},
    {task: "laboratory", completed: false},
    {task: "gym", completed: false},
    {task: "get travel tickets", completed: true},
    {task: "cleaning", completed: false}
  ];

  hasPendingTasks():boolean{
    let hasPendingTask=false;
    for (let todo of this.todoList){
      if(!todo.completed){
        hasPendingTask=true;
        break;
      }
    };
    return hasPendingTask;
  }

  ngOnInit() {
  }

  completeTask(todo:Todo):void{
    todo.completed=true;
  }

  deleteTask(index: number):void{
    this.todoList.splice(index, 1);
  }

  addTaskToList(todo: Todo):void{
    this.todoList.push(todo);
  }

  showTask(task:string):boolean{
    console.log(this.filterInTS);
    if(this.filterInTS ==="" || task.includes(this.filterInTS)){
      return true;
    }
    return false;
  }

}
