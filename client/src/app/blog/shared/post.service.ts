import { blogPost, fbCreateResponse } from './interfaces';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/internal/operators';

@Injectable({providedIn: 'root'})

export class PostService {

  constructor(private http: HttpClient) {}

  create(post: blogPost): Observable<blogPost> {
    return this.http.post(`${environment.fbDbUrl}/posts.json`, post)
      .pipe(map( (response: fbCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      }));
  }

  getAll(): Observable<blogPost[]> {
    return this.http.get(`${environment.fbDbUrl}/posts.json`)
      .pipe(
        map( (response: {[key: string]: any}) => {
          return Object.keys(response).map( key => ({
            ...response[key],
            id: key,
            date: new Date(response[key].date)
          }));
        })
      );
  }

  getById(id: string): Observable<blogPost> {
    return this.http.get(`${environment.fbDbUrl}/posts/${id}.json`)
    .pipe(map( (post: blogPost) => {
      return {
        ...post, id,
        date: new Date(post.date)
      };
    }));
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.fbDbUrl}/posts/${id}.json`);
  }

  update(post: blogPost): Observable<blogPost> {
    return this.http.patch<blogPost>(`${environment.fbDbUrl}/posts/${post.id}/.json`, post);
  }
}
