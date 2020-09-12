import { Router } from '@angular/router';
import { TranslateService } from './../../translate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {

  form: FormGroup;

  constructor(
    public translateService: TranslateService,
    private router: Router
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      word: new FormControl(null, Validators.required),
      translate: new FormControl(null, Validators.required)
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const word = this.form.value.word;
    const translate = this.form.value.translate;
    this.translateService.addTo(word, translate);
    this.form.reset();
  }

  start() {
    if (this.translateService.wordCount === 0) {
      this.form.get('word').markAllAsTouched();
      this.form.get('translate').markAllAsTouched();
      return;
    }
    this.router.navigate(['/words/test']);
  }
}
