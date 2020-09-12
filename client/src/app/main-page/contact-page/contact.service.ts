import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'



@Injectable({providedIn: 'root'})

export class ContactService {
  constructor(private http: HttpClient) {
  }


  sendMail(mailData):Observable<{ message: string }> {
    return this.http.post<{ message: string }>('/api/contact', mailData)
  }
}
