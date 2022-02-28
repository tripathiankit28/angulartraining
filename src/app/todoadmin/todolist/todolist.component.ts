import { Component, OnInit } from '@angular/core';
import { Todolist } from 'src/app/interfaces/todolist';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  todolists:Todolist[] =[];

  constructor(private todolistService: TodolistService) { }

  ngOnInit(): void {
    this.todolistService.all().subscribe(
    todolists =>{
      this.todolists=todolists

    }
    )
  }
 todoDel( id: number): void{
   this.todolistService.delete(id).subscribe(
     ()=>{
       this.todolists= this.todolists.filter(p => p.id !== id);
     }
   )

 }
}
