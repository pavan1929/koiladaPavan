import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { PostsComponent } from './posts/posts.component';
import {SearchService} from './intro/search.service';
import {PostService} from './posts/post.service';
import {userReducer} from './ngrxStore/reducer';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({userStore:userReducer})
  ],
  providers: [SearchService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
