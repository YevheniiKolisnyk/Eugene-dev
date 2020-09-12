import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TranslateService {
  wordArr: Array<string> = [];
  translateArray: Array<string> = [];
  noAnswer = [];
  random: number;
  showTest = false;
  showResult = false;
  wordCount = 0;
  mistakes;

  addTo(word, translate) {
    this.wordCount ++;
    this.wordArr.push(word);
    this.translateArray.push(translate);
  }

   generate() {
    this.random = Math.floor(Math.random() * this.translateArray.length + 0);
  }

  checkAnswer(answer) {
    if (answer.toLowerCase() === this.translateArray[this.random].toLowerCase()) {
          this.wordArr.splice(this.random, 1);
          this.translateArray.splice(this.random, 1);
          this.generate();
            } else {
          this.noAnswer.push({word: this.wordArr[this.random], translate: this.translateArray[this.random]});
          this.wordArr.splice(this.random, 1);
          this.translateArray.splice(this.random, 1);
          this.generate();
        }
  }

  endTest(){
    for(let i = 0; i < this.wordArr.length;i ++){
      this.noAnswer.push({'word': this.wordArr[i],'translate': this.translateArray[i]})
    }
  }
}
