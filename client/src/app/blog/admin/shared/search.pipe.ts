import { blogPost } from './../../shared/interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'SearchPost'
})

export class SearchPipe implements PipeTransform {
  transform(posts: blogPost[], search = ''): blogPost[] {
    if (!search.trim()) {
      return posts;
    }
    return posts.filter(post => {
        return post.title.toLowerCase().includes(search.toLowerCase());
      });
  }
}
