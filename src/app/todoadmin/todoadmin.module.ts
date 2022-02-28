import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoadminComponent } from './todoadmin.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './products/products.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodolistCreateComponent } from './todolist-create/todolist-create.component';
import { TodolistEditComponent } from './todolist-edit/todolist-edit.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TodoadminComponent,
    MenuComponent,
    NavComponent,
    ProductsComponent,
    TodolistComponent,
    TodolistCreateComponent,
    TodolistEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class TodoadminModule { }
