import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { observable } from 'rxjs';
import {DataService} from '../data.service';
import {IData} from '../dt';

@Component({
  selector: 'app-data-fetch',
  templateUrl: './data-fetch.component.html',
  styleUrls: ['./data-fetch.component.css']
})
export class DataFetchComponent implements OnInit {
   public fetch: IData[] =[]

  constructor(private datavar:DataService) { }
  ngOnInit(): void {
    this.datavar.getData().subscribe(response =>{
      this.fetch=response.data
      console.log(this.fetch)
    });
  }
}