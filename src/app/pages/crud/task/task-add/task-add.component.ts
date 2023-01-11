import { Component, OnInit } from '@angular/core';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: [

  ]
})
export class TaskAddComponent implements OnInit {

  task: Task;

  constructor() { }

  ngOnInit(): void {
    this.task = new Task();
  }

}
