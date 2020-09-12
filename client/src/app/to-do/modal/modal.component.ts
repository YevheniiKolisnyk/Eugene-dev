import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ModalData} from '../../mode-data'
import {Component, OnInit, Inject, EventEmitter} from '@angular/core'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import {TodoService} from '../todo.service'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  form: FormGroup
  onAdd = new EventEmitter()

  constructor(
    private todoService: TodoService,
    private dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData
  ) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl(null, Validators.required),

    })
  }

  onNoClick() {
    this.dialogRef.close()
  }

  submit() {
    if (this.form.invalid) {
      return
    }

    this.todoService.create(this.form.value).subscribe(
      (response) =>{
        this.onAdd.emit(response)
      }
    )

    this.form.reset()
    this.dialogRef.close()
  }


}



