import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { Task } from '../../task/model/task';
import { Project } from '../model/project';
import { ProjectEntity } from '../model/projectEntity';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: [

  ]
})
export class ProjectAddComponent implements OnInit {

  project: Project | any;
  tasks: Task[] | any;
  projectTasks: Task[] | any;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.project = new ProjectEntity();
    this.getTasks();
    const projectId: string | null = this.route.snapshot.paramMap.get("id");
    if (projectId) {
      this.adminService
        .getProjectById(+projectId)
        .subscribe((project) => (this.project = project, this.projectTasks = this.project.tasks));
    }
  }

  public hasTask(task: Task, i: number): boolean {
    for (let project of this.projectTasks) {
      if(project.id == task.id) {
        task.project = project;
        return true;
      }
    }
  }

  public selectTask($event: Event, task: Task) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.project.tasks.push(task);
    } else {
      const i = this.project.tasks.indexOf(task);
      this.project.tasks.splice(i, 1);
    }
  }

  public getTasks(): void {
    this.adminService.getTasks().subscribe(
      (response: Task[]) => {
        this.tasks = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
