import { Observable } from 'rxjs';
import { blogPost } from './../shared/interfaces';
import { PostService } from './../shared/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
k = false
  posts$: Observable<blogPost[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.getAll();
  }

}
