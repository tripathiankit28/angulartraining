import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {


  name= "Credex Technology";
  message="Welcome to Credex Technology";
  date = new Date();

}
