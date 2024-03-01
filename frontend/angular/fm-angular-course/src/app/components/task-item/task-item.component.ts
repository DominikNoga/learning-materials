import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.less']
})
export class TaskItemComponent implements OnInit {

  @Input() task?: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTask = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(): void {
    if (this.task){
      this.task.reminder = !this.task.reminder;
      this.onToggleTask.emit(this.task);
    }
  }

  onDelete(): void {
    this.onDeleteTask.emit(this.task?.id);
  }
}
