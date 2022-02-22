import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IData } from './dt';
import { Observable } from 'rxjs';
import {api} from './dt';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _url:string="https://reqres.in/api/users";

  constructor(private http:HttpClient) { }
  getData(): Observable<api>{
    return this.http.get<api>(this._url);
  }
}
