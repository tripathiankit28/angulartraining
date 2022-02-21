import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="f1"><p>Footer is made using {{name}}</p></div>
  <p> button using event binding </p> 
  <button (click)=onclick()>Click Me!</button>`,
  styleUrls: ['./footer.component.css']
  
})
export class FooterComponent implements OnInit {
  public name ="Interpolation";

  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    console.log("Welcome to Credex");
  }

}
