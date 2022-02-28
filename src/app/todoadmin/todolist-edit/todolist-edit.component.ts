import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-todolist-edit',
  templateUrl: './todolist-edit.component.html',
  styleUrls: ['./todolist-edit.component.css']
})
export class TodolistEditComponent implements OnInit {

  form: FormGroup;
  id:number;
  constructor(
             private formbuilder: FormBuilder,
             private todoService: TodolistService,
             private route:ActivatedRoute,
             private router:Router
             )
              {
               this.form=this.formbuilder.group({
                 title:'',
                 status:''
               })
               this.id = this.route.snapshot.params['id'];
               this.todoService.get(this.id).subscribe(
                 todolist => this.form.patchValue(todolist)
               )
              }

  ngOnInit(): void {
  }
  submit():void{
    this.todoService.update(this.id,this.form.getRawValue()).subscribe(
      () =>{
        this.router.navigate(['/todoadmin/todolist'])
      }
    )

  }

}
