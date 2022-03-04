import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';
import { PrintComponent } from './print/print.component';



const routes: Routes = [
  {path: 'notes', component: NotesComponent},
  {path: 'print', component: PrintComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
