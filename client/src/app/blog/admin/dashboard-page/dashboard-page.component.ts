import { AlertService } from './../shared/services/alert.service';
import { blogPost } from './../../shared/interfaces';
import { PostService } from './../../shared/post.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSpinner } from '@angular/material';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

posts: blogPost[] = [];
pSub: Subscription;
dSub: Subscription;
searchStr: string =''

  constructor(
    private postsService: PostService,
    private alertService: AlertService,
    ) { }

  ngOnInit() {
    this.pSub = this.postsService.getAll().subscribe(post => {
      this.posts = post;
    });
  }

  remove(id: string){
    this.dSub = this.postsService.remove(id).subscribe(() =>{
      this.posts = this.posts.filter( post => post.id !== id)
      this.alertService.danger('Post was deleted')
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe();
    }

    if (this.dSub) {
      this.dSub.unsubscribe();
    }
  }
}
