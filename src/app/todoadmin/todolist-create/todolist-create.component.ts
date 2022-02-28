import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist-create',
  templateUrl: './todolist-create.component.html',
  styleUrls: ['./todolist-create.component.css']
})
export class TodolistCreateComponent implements OnInit {
  title="";
  status="";

  constructor(private todoService:TodolistService,
    private router:Router) { }

  ngOnInit(): void {
  }
  submit(){
    const data ={
      title:this.title,
      status: this.status
    }
    this.todoService.create(data).subscribe(
      () =>{
        this.router.navigate(['/todoadmin/todolist'])

      }
    )
  }

}
