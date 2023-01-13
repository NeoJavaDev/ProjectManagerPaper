import { Component, OnInit } from '@angular/core';
import { Project } from '../../project/model/project';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: [

  ]
})
export class TaskAddComponent implements OnInit {

  task: Task;
  project: Project | any;
  projects: Project[] | any;

  constructor() { }

  ngOnInit(): void {
    this.task = new Task();
  }
}
