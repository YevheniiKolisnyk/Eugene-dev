import { TranslateService } from './../../translate.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-words',
  templateUrl: './modal-words.component.html',
  styleUrls: ['./modal-words.component.scss']
})
export class ModalWordsComponent implements OnInit {

  constructor(
    public translateService: TranslateService
  ) { }

  ngOnInit(): void {
  }

}
