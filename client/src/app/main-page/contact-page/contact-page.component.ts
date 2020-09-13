import {Component, OnInit} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {ContactService} from './contact.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import {MainSnackbarComponent} from '../main-snackbar/main-snackbar.component'

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss', './contact-page.media.scss']
})
export class ContactPageComponent implements OnInit {

  form: FormGroup


  constructor(
    private http: HttpClient,
    private contactService: ContactService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null, Validators.required),
      message: new FormControl(null, Validators.required),
    })
  }


  onSubmit() {
    this.contactService.sendMail(this.form.value).subscribe(
      (res) => {
        this.form.reset()
        this._snackBar.open('Your message has been sent :)', '', {
          duration: 2000,
          panelClass: 'snackBar'
        })
      },
    () => {
      this._snackBar.open('Something went wrong :(', '', {
        duration: 2000,
        panelClass: 'snackBar'
      })
    }
    )
  }
}
