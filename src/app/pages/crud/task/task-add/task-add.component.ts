import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
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

  constructor(
    private adminService: AdminService) { }

  ngOnInit(): void {
    this.task = new Task();
  }
}
