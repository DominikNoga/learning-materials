import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent {
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  @Output() onAddTask = new EventEmitter();
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe(formToggled => {
      this.showAddTask = formToggled;
    })
  }

  onToggle(): void {
    this.showAddTask = !this.showAddTask;
  };

  private clearForm(): void {
    this.reminder = false;
    this.text = '';
    this.day = '';
  };

  onSubmit(): void {
    if(this.text === ''){
      alert('Please enter a text');
      return;
    }
    const task = {
      id: Math.floor(Math.random() * 100000),
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }
    this.onAddTask.emit(task);
    this.clearForm();
  };

}
