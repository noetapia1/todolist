import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }
  todoList:Todo[]=[
    {task: "laundry", completed: true},
    {task: "folding clothes", completed: false},
    {task: "dinner", completed: false},
    {task: "shopping groceries", completed: false},
    {task: "take out trash", completed: true},
    {task: "homework", completed: false},
    {task: "laboratory", completed: false},
    {task: "gym", completed: false},
    {task: "get travel tickets", completed: true},
    {task: "cleaning", completed: false}
  ];


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

}
