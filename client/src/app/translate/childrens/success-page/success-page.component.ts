import { TranslateService } from './../../translate.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.scss']
})
export class SuccessPageComponent implements OnInit {

  constructor(
    private translateService: TranslateService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  again() {
    this.router.navigate(['/words/input']);
    this.translateService.wordArr = [];
    this.translateService.translateArray = [];
    this.translateService.noAnswer = [];
    this.translateService.wordCount = 0;
    this.translateService.mistakes = null;
  }
}
