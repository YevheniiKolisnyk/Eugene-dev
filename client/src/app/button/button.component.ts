import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],

})
export class ButtonComponent implements OnInit {
  mouse = false;
  fadeIn: any;
  fadeOut: any;
  showCodeButton = false;
  form: FormGroup;
  buttonTitle = 'Sample text';
  valueToCopy = 'color: #ffffff;\nbackground-color: #BDE2EC;\nborder-color: #BDE2EC;\noutline: none;\ncursor: pointer;';
  values = {
    forFontSize: '12',
    forBorderRadius: '0',
    forBorderWidth: '0',
    forBorderStyle: 'solid',
    forTopPadding: '0',
    forBotPadding: '0',
    forLeftPadding: '0',
    forRightPadding: '0',
  };

  styles = {
    color: '#ffffff',
    backgroundColor: '#BDE2EC',
    fontSize: '' ,
    borderRadius: '',
    borderWidth: '',
    borderStyle: '',
    borderColor: '#BDE2EC',
    padding: ''
  };



  constructor(private clipboard: ClipboardService) { }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null),
      textColor: new FormControl(),
      buttonColor: new FormControl(),
      fontSize: new FormControl(0),
      borderRadius: new FormControl(0),
      selectStyle: new FormControl(),
      borderWidth: new FormControl(0),
      color: new FormControl(0),
      paddingTop: new FormControl(0),
      paddingBot: new FormControl(0),
      paddingLeft: new FormControl(0),
      paddingRight: new FormControl(0),
    });
  }

  onChange() {
    this.styles.fontSize = this.values.forFontSize + 'px';
    this.styles.borderRadius = this.values.forBorderRadius + 'px';
    this.styles.borderWidth = this.values.forBorderWidth + 'px';
    this.styles.borderStyle = this.values.forBorderStyle;
    this.styles.padding = `${this.values.forTopPadding}px
                           ${this.values.forRightPadding}px
                           ${this.values.forBotPadding}px
                           ${this.values.forLeftPadding}px`;

    this.valueToCopy = 'background-color: ' + this.styles.backgroundColor + ';' + '\n' +
                        'border: ' + this.styles.borderWidth + ' ' + this.styles.borderStyle + ' ' + this.styles.borderColor + ';\n' +
                        'border-radius: ' + this.styles.borderRadius + ';\n' +
                        'color: ' + this.styles.color + ';\n' +
                        'font-size: ' + this.styles.fontSize + ';\n' +
                        'padding: ' + this.styles.padding + ';\n';



  }



  copy() {
    this.clipboard.copyFromContent(this.valueToCopy);

  }
}
