import { Component, OnInit } from '@angular/core';
import {PostService} from './post.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {user} from '../ngrxStore/user';
import Swal from 'sweetalert2/dist/sweetalert2';

interface AppState{
  user:user;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  userValue:Observable<user>;
  postList:any[];
  constructor(private postService:PostService, private store:Store<AppState>) { 
    this.userValue = this.store.select('userStore');
  }
  ngOnInit() {
    //this.active.params.subscribe(param=>this.id = param.id);
    this.userValue.subscribe(data=>{
      this.postService.post(data.id).subscribe((data:any[])=>{
        this.postList = data;
      });
    },err=>{Swal.fire('Unknown Error', 'Unable to make request', 'error')});
  }

}
