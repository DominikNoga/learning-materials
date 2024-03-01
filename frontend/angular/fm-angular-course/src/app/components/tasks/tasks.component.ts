import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks$.subscribe(tasks => (this.tasks = tasks));
  }

  updateTask(task: Task): void {
    this.taskService.updateTask(task).subscribe();
  };

  deleteTask(taskId: number): void {
    const toDelete = this.tasks.find(task => task.id === taskId);
    if(toDelete){
      this.tasks.splice(this.tasks.indexOf(toDelete), 1);
      this.taskService.deleteTask(taskId).subscribe();
    }
  };
  addTask(task: Task): void {
    this.taskService.addTask(task).subscribe(task => {
      this.tasks.push(task);
    });
  };

  ngOnDestroy() {

  }
}
