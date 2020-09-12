import { TranslateService } from './../../translate.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {

  form: FormGroup;


  constructor(
    public translateService: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      answer: new FormControl(null, Validators.required)
    });
    this.translateService.generate();
  }

  answer() {
    if (this.form.invalid) {
      return;
    }
    const answer = this.form.value.answer;
    this.translateService.checkAnswer(answer);

    if (this.translateService.translateArray.length === 0) {
        if (this.translateService.noAnswer.length === 0) {
          this.router.navigate(['/words/success']);
        } else {
          this.router.navigate(['/words/fail']);
        }
      }
    this.form.reset();
  }




  end() {
    this.router.navigate(['/words/fail']);
    this.translateService.endTest();
    this.form.reset();
  }
}
