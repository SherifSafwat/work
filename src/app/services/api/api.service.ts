import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/data/posts';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  public covid19Reports(){
    return  this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  
  public getPost(id?: number){    
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    //.subscribe(data => {   console.log(data); return data; }); 
  }
 

  public add(post: string) {
    //const body = { userId: post?.userId };
    const header = new HttpHeaders({ 'content-type': 'application/json' });
    //this.http.post<any>(this.url, post, { headers: header })
    //  .subscribe(data => {  console.log(data);  return data.id; });
    //const headers = {'Content-Type': 'application/json', 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };   
    //const body = { title: 'Angular POST Request Example' };
    //this.http.post<IPost>('https://reqres.in/api/posts', body, { headers })
    //this.http.post<IPost>(url, body)
    //.subscribe(data => { return data.id; });

    this.http.post<any>(this.url, post).subscribe({
        next: data => {
          console.error('data!', data);;
        },
        error: error => {
            //this.errorMessage = error.message;
            console.error('There was an error!', error);
        }
    })
  }

}