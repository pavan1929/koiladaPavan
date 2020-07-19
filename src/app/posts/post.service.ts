import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl:string = "https://jsonplaceholder.typicode.com/posts?userId=";
  constructor(private http:HttpClient) { }
  post(value:number):Observable<any>{
    let url = encodeURI(this.postUrl+value);
    return <Observable<any>>this.http.get(url);
  }
}
