import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todolist } from '../interfaces/todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  apiUrl='http://localhost:3000/todolists'

  constructor(private http:HttpClient) { }

  all():Observable<Todolist[]>{
    return this.http.get<Todolist[]>(this.apiUrl)
  }
  create(data:any):Observable<Todolist[]>{
    return this.http.post<Todolist[]>(this.apiUrl,data)
  }
  get(id:number): Observable<Todolist>{
    return this.http.get<Todolist>(`${this.apiUrl}/${id}`)

  }
  update(id:number,data: any):Observable<Todolist>{
    return this.http.put<Todolist>(`${this.apiUrl}/${id}`,data)
  }
  delete(id: number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  }

