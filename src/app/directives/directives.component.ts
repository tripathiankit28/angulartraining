import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  template: `<h1 style="color: cadetblue;">Ng-if </h1>
  Keep html:<input type="checkbox" ng-init="myVar=True">
  <div ng-if="myVar">
      <h1>Displaying using ng-if directives.</h1>
  </div>
  
  
  <h1 style="color: cadetblue;"> Ng-for</h1>
  <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
  </div>`,
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public colors=["red","blue"];

  constructor() { }

  ngOnInit(): void {
  }
  

}
