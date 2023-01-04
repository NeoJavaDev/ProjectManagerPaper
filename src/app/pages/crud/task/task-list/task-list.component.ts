import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styles: [
  ]
})
export class TaskListComponent implements OnInit {

  public tasks: Task[] | undefined;

  constructor(private router: Router, private adminService: AdminService) {}

  ngOnInit(): void {
      this.getTasks();
  }

  public getTasks(): void {
    this.adminService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToTask(task: Task) {
    this.router.navigate(["/task", task.id]);
  }

  deleteTask(taskId: number) {
    this.adminService.deleteTaskById(taskId);
  }

}
