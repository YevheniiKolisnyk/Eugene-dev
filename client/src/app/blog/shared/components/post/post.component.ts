import { blogPost } from './../../interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: blogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
