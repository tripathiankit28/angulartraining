import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { NotesComponent } from './notes/notes.component';
import { PrintComponent } from './print/print.component';


@NgModule({
  declarations: [
    NotesComponent,
    PrintComponent
  ],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
