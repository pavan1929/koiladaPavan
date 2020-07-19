import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  searchUrl:string = "https://jsonplaceholder.typicode.com/users?name=";
  constructor(private http:HttpClient) { }
  search(value:string):Observable<any>{
    let url = encodeURI(this.searchUrl+value);
    return <Observable<any>>this.http.get(url);
  }
}
