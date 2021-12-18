import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  public covid19Reports(){
  //return  this.http.get("https://corona.lmao.ninja/v2/countries");
  return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  
  public getPost(id: number){
    return  this.http.get("https://jsonplaceholder.typicode.com/posts/{:id}");
  }
  
}