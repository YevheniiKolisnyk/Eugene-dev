import { ModalWordsComponent } from './../modal-words/modal-words.component';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { TranslateService } from './../../translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fail-page',
  templateUrl: './fail-page.component.html',
  styleUrls: ['./fail-page.component.scss']
})
export class FailPageComponent implements OnInit {

  constructor(
    public translateService: TranslateService,
    private router: Router,
    private mDial: MatDialog
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

  openModal() {
    this.mDial.open(ModalWordsComponent, {
      width: '800px',
    });
  }
}
