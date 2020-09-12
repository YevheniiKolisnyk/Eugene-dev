import { AlertService } from './../shared/services/alert.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { blogPost } from './../../shared/interfaces';
import { PostService } from './../../shared/post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/internal/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit, OnDestroy {

  form: FormGroup;
  post: blogPost;
  submited = false;
  uSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {
        return this.postService.getById(params.id);
      })
      )
        .subscribe((post: blogPost) => {
          this.post = post;
          this.form = new FormGroup({
            title: new FormControl(post.title, Validators.required),
            content: new FormControl(post.content, Validators.required)
          });
        });
  }

  ngOnDestroy() {
    if (this.uSub) {
      this.uSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    this.submited = true;
    this.uSub = this.postService.update({
      ...this.post,
      title: this.form.value.title,
      content: this.form.value.content,
    }).subscribe(() => {
      this.submited = false;
      this.alertService.warning('Post was updated');
      this.router.navigate(['/blog', 'admin', 'dashboard'])
    });
  }

}
