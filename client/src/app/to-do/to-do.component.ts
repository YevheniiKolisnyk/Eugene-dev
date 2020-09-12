import {toDoAnimations} from './to-do.animations'
import {
  MatDialog,
} from '@angular/material'
import {Component, OnInit} from '@angular/core'
import {ModalComponent} from './modal/modal.component'
import {Task} from './todo.interface'
import {TodoService} from './todo.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  animations: [toDoAnimations],
})
export class ToDoComponent implements OnInit {
  tasks: Task[] = []
  doneTasks: Task[] = []

  constructor(
    private dialog: MatDialog,
    private todoService: TodoService
  ) {
  }

  ngOnInit() {
    this.todoService.fetch().subscribe(response => {
      response.forEach(task => {
        if (task.done) {
          this.doneTasks.push(task)
        } else {
          this.tasks.push(task)
        }
      })
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
    })
    const sub = dialogRef.componentInstance.onAdd.subscribe(response => {
      this.tasks.push(response)
    })
    dialogRef.afterClosed().subscribe(() => {
      sub.unsubscribe()
    })
  }

  complete(_id: string) {
    this.todoService.completeTask(_id).subscribe(response => {
      this.tasks = this.tasks.filter(item => item._id !== _id)
      this.doneTasks.push(response)
    })
  }

  deleteTasks() {

    this.todoService.delete().subscribe(() => {
      this.doneTasks = []
    })
  }
}
