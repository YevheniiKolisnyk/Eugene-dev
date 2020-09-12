import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {CopySnackBarComponent} from "./copy-snack-bar/copy-snack-bar.component";

interface flexProps {
  value: string,
  viewValue: string,
}

@Component({
  selector: 'app-flex-box',
  templateUrl: './flex-box.component.html',
  styleUrls: ['./flex-box.component.scss'],
})

export class FlexBoxComponent implements OnInit {

  textToClipBoard = ''
  textChildToClipBoard = ''
  selectedItem: string;
  parentFlexStyle: {} ={}
  childFlexStyle: {} ={}
  selectedChildFlexStyle: {} = {}

  flexProperties: flexProps[] = [
    {value: 'flexDirection', viewValue: 'flex-direction'},
    {value: 'justifyContent', viewValue: 'justify-content'},
    {value: 'flexWrap', viewValue: 'flex-wrap'},
    {value: 'flexFlow', viewValue: 'flex-flow'},
    {value: 'order', viewValue: 'order'},
    {value: 'alignItems', viewValue: 'align-items'},
    {value: 'alignSelf', viewValue: 'align-self'},
    {value: 'alignContent', viewValue: 'align-content'},
    {value: 'flexGrow', viewValue: 'flex-grow'},
    {value: 'flexShrink', viewValue: 'flex-shrink'},
    {value: 'flexBasis', viewValue: 'flex-basic'}
  ]

  flexParams = {
    'flexDirection': ['row', 'row-reverse', 'column', 'column-reverse'],
    'justifyContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    'flexWrap': ['nowrap', 'wrap', 'wrap-reverse'],
    'flexFlow': ['row nowrap', 'column-reverse', 'column wrap', 'row-reverse wrap-reverse'],
    'order': ['-1', '0', '1'],
    'alignItems': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    'alignSelf': ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    'alignContent': ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly', 'stretch'],
    'flexGrow': ['0', '1'],
    'flexShrink': ['0', '1'],
    'flexBasis': ['30%', '50%', 'auto']
  }

  constructor(private _snackBar: MatSnackBar) {
  }
  ngOnInit() {
  }


  onClick(event){
    this.parentFlexStyle = {}
    this.childFlexStyle = {}
    const flexParam = event.target.textContent
    this.joinToObject(this.parentFlexStyle, [{[this.selectedItem]: flexParam}])
    this.toClipBoard({[this.selectedItem]: flexParam}, false)

    switch (this.selectedItem){
      case "flexWrap":
        this.joinToObject(this.childFlexStyle, [{'width': '40%'}])
        break
      case 'flexFlow':
        this.joinToObject(this.childFlexStyle, [{'width': '40%'}, {'height': '40%'}])
        break
      case 'order':
        this.joinToObject(this.selectedChildFlexStyle, [{[this.selectedItem]: flexParam}])
        this.parentFlexStyle = {}
        this.toClipBoard({[this.selectedItem]: flexParam}, true)
        break
      case 'alignSelf':
        this.joinToObject(this.selectedChildFlexStyle, [{[this.selectedItem]: flexParam}])
        this.parentFlexStyle = {}
        this.toClipBoard({[this.selectedItem]: flexParam}, true)
        break
      case 'alignContent':
        this.joinToObject(this.parentFlexStyle, [{'flexWrap': 'wrap'}])
        this.joinToObject(this.childFlexStyle, [{'width': '30%'}, {'minHeight': '50px'}, {'height': 'auto'}])
        this.toClipBoard({[this.selectedItem]: flexParam}, true)
        break
      case 'flexGrow':
        this.joinToObject(this.selectedChildFlexStyle, [{[this.selectedItem]: flexParam}])
        this.parentFlexStyle = {}
        this.toClipBoard({[this.selectedItem]: flexParam}, true)
        break
      case 'flexShrink':
        this.joinToObject(this.childFlexStyle, [{'width': '40%'}])
        this.joinToObject(this.selectedChildFlexStyle, [{[this.selectedItem]: flexParam}, {'width': '40%'}])
        this.parentFlexStyle = {}
        this.toClipBoard({[this.selectedItem]: flexParam}, true)
        break
      case 'flexBasis':
        this.joinToObject(this.selectedChildFlexStyle, [{[this.selectedItem]: flexParam}])
        this.parentFlexStyle = {}
        this.toClipBoard({[this.selectedItem]: flexParam} , true)
        break

    }


  }

  setDefaultStyle(){
    this.parentFlexStyle = {}
    this.childFlexStyle = {}
    this.selectedChildFlexStyle = {}
    this.textChildToClipBoard = ''
    this.textToClipBoard = ''
  }

  joinToObject(obj, array){
    Object.assign(obj, ...array)
  }

  toClipBoard(param?, isChild?){
    const key = Object.keys(param)[0]
    const paramsArray = this.flexProperties.find(item => item.value === key)
    const newKey = paramsArray.viewValue
    if (!isChild) {
      this.textToClipBoard = `${newKey}: ${param[key]};`
    } else if (isChild){
      this.textChildToClipBoard = `${newKey}: ${param[key]};`
      this.textToClipBoard = ''
    }
  }

  openSnackBar(){
    this._snackBar.openFromComponent(CopySnackBarComponent, {
      duration: 3000
    })
  }
}
