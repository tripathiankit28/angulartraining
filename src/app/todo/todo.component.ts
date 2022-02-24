import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent  {
  title="My Todo";
  todos =[
    {
      label: "Bring vegetables",
      done: false,
      priority :3
    },
    {
      label: "Do homework",
      done: false,
      priority: 1
    },
    {
      label: "Pay Mobile Bill",
      done: false,
      priority : 4
    },
    {
      label: "Do Execrice",
      done: true,
      priority : 2
    }
  ];

  addTodo(newTodoLabel:any){
    var newTodo ={
      label: newTodoLabel,
      priority: 1,
      done: false
    };
    this.todos.push(newTodo);


  }
  deleteTodo(todo: any){
    this.todos= this.todos.filter(t => t.label !== todo.label);

  }
}


 