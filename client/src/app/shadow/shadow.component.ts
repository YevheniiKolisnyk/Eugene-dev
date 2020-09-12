import { ClipboardService } from 'ngx-clipboard';
import { FormGroup, FormControl } from '@angular/forms';
import { shadowAnimations } from './shadow.animations';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-shadow',
  templateUrl: './shadow.component.html',
  styleUrls: ['./shadow.component.scss'],
  animations: [shadowAnimations],
})
export class ShadowComponent implements OnInit {

  constructor(private clipboard: ClipboardService) {}

  valueToCopy =
    '-webkit-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.5);\n-moz-box-shadow: 5px 5px 0px 0px rgba(0,0,0,0.5);\nbox-shadow: 5px 5px 0px 0px rgba(0,0,0,0.5);';
  mouseEnter = false;
  showCodeButton = false;
  rgb = '';
  fadeIn: any;
  fadeOut: any;
  form: FormGroup;
  hex: any;
  r: any;
  g: any;
  b: any;
  monitorWidth = window.innerWidth;
  rgbaColor = '';
  blockStyles = {};
  values = {
    checkbox: 'false',
    marked: 'false',
    horizontal: '5',
    vertical: '5',
    blur: '0',
    spread: '0',
    shadowColor: '#000000',
    opacity: '0.5',
  };

  style = {
    boxShadow: '',
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.monitorWidth = event.target.innerWidth;
    this.checkSize()
  }

  ngOnInit() {
    this.form = new FormGroup({
      checkboxToggle: new FormControl(),
      horizontalOffset: new FormControl(),
      verticalOffset: new FormControl(),
      blurRadius: new FormControl(),
      spreadRadius: new FormControl(),
      shadowColor: new FormControl(),
      opacity: new FormControl(),
      inputForHorizontal: new FormControl(),
      inputForVertical: new FormControl(),
      inputForBlur: new FormControl(),
      inputForSpread: new FormControl(),
      inputForOpacity: new FormControl(),

    });

    this.checkSize()

    if (this.values.marked) {
      this.values.marked = '';
    } else {
      this.values.marked = 'inset';
    }
    this.hex = this.values.shadowColor.replace('#', '');
    this.r = parseInt(this.hex.substring(0, 2), 16);
    this.g = parseInt(this.hex.substring(2, 4), 16);
    this.b = parseInt(this.hex.substring(4, 6), 16);
    this.rgbaColor = `rgba(${this.r},${this.g},${this.b},${this.values.opacity})`;

    this.style.boxShadow = `${this.values.marked}
                            ${this.values.horizontal}px
                            ${this.values.vertical}px
                            ${this.values.blur}px
                            ${this.values.spread}px
                            ${this.rgbaColor}`;
  }

  onChangeToggle(e) {
    this.values.marked = e.target.checked;
    if (this.values.marked) {
      this.values.marked = '';
    } else {
      this.values.marked = 'inset';
    }
    console.log(this.values.marked);
  }

  onChange() {
    // From HEX to RGB
    this.hex = this.values.shadowColor.replace('#', '');
    this.r = parseInt(this.hex.substring(0, 2), 16);
    this.g = parseInt(this.hex.substring(2, 4), 16);
    this.b = parseInt(this.hex.substring(4, 6), 16);
    this.rgbaColor = `rgba(${this.r},${this.g},${this.b},${this.values.opacity})`;

    this.style.boxShadow = `${this.values.marked}
                              ${this.values.horizontal}px
                              ${this.values.vertical}px
                              ${this.values.blur}px
                              ${this.values.spread}px
                              ${this.rgbaColor}`;
    this.valueToCopy =
      '-webkit-box-shadow: ' +
      this.values.horizontal +
      'px ' +
      this.values.vertical +
      'px ' +
      this.values.blur +
      'px ' +
      this.values.spread +
      'px ' +
      this.rgbaColor +
      '\n-moz-box-shadow: ' +
      this.values.horizontal +
      'px ' +
      this.values.vertical +
      'px ' +
      this.values.blur +
      'px ' +
      this.values.spread +
      'px ' +
      this.rgbaColor +
      '\nbox-shadow: ' +
      this.values.horizontal +
      'px ' +
      this.values.vertical +
      'px ' +
      this.values.blur +
      'px ' +
      this.values.spread +
      'px ' +
      this.rgbaColor;
  }

  copy() {
    this.clipboard.copyFromContent(this.valueToCopy);
  }

  checkSize(){
    if (this.monitorWidth <= 1100) {
      this.showCodeButton = true;
      this.stylesForBlock();
    }
  }

  stylesForBlock() {
    this.blockStyles = this.style;
  }

  applyChanges(){
    this.stylesForBlock()
  }
}
