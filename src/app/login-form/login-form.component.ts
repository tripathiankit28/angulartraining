import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent{
   
  log(x= {}){
     console.log(x)
  }
  reset(){
     this.form.reset();
  }
  get firstName() {
   return this.form.get('firstName')
 }
 get lastName() {
   return this.form.get('lastName')
 }
 get email() {
   return this.form.get('email')
 }
 get password() {
   return this.form.get('password')
 }
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  form = new FormGroup({
     firstName: new FormControl('',[
        Validators.required,
        Validators.pattern('[a-zA-Z]*')
     ]),
     lastName: new FormControl('',[
        Validators.pattern('[a-zA-Z]*'),
        Validators.maxLength(10)
     ]),
     phone: new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('[0-9]*')

     ]),
     gender : new FormControl('',[
        Validators.required
     ]),
     email : new FormControl('',[
        Validators.required,
        Validators.pattern(this.emailPattern)
     ]),
     password : new FormControl('',[
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
     ])

  })}
