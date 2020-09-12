import { blogPost } from './../shared/interfaces';
import { Observable } from 'rxjs';
import { PostService } from './../shared/post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  post$: Observable<blogPost>;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  ngOnInit(): void {
    this.post$ = this.route.params.pipe( switchMap((params: Params) => {
      return this.postService.getById(params['id']);
    }));
  }

}
