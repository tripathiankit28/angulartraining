import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodoadminComponent } from './todoadmin/todoadmin.component';
import { TodolistCreateComponent } from './todoadmin/todolist-create/todolist-create.component';
import { TodolistEditComponent } from './todoadmin/todolist-edit/todolist-edit.component';
import { TodolistComponent } from './todoadmin/todolist/todolist.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path:'todoadmin' , component: TodoadminComponent,
    children:[
      {
        path: 'todolist', component: TodolistComponent
      },
      {
        path: 'todolist/create', component: TodolistCreateComponent
      },
      {
        path: 'todolist/:id/edit', component:TodolistEditComponent
      }
    ]
  },
  {path:"lazy",loadChildren:()=>import('./lazy/lazy.module')
  .then(mod=>mod.LazyModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
