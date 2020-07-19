import { Component, OnInit} from '@angular/core';
import {SearchService} from './search.service';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import {user} from '../ngrxStore/user';
import {userUpdate} from '../ngrxStore/action';
import Swal from 'sweetalert2/dist/sweetalert2';

interface AppState{
  user:user;
}

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  userNameValue:string;
  userValue:Observable<user>;
  id:number;
  constructor(private searchService:SearchService, private router:Router,private store:Store<AppState>) {
    this.userValue = this.store.select('userStore');
  }
  ngOnInit() {}
  onSearch(){
    //this.userValue.subscribe(data=>console.log(data.id));
    this.searchService.search(this.userNameValue).subscribe((data:any[])=>{
      if (data.length>0){
        let upadteUser = new userUpdate({id:data[0].id,name:data[0].name});
        this.store.dispatch(upadteUser);
        this.router.navigate(['posts']);
      }else{
        Swal.fire('Oops...', 'User name not found!', 'error');
      }
    },err=>{Swal.fire('Unknown Error', 'Unable to make request', 'error')});
  }

}
