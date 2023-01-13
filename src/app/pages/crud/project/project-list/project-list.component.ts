import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styles: [
  ]
})
export class ProjectListComponent implements OnInit {

  public projects: Project[]|undefined;
  public project: Project|undefined;

  constructor(private router: Router,private adminService: AdminService) {}

  ngOnInit(): void {
      this.getProjects();
  }

  public getProjects(): void {
    this.adminService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  goToProjectList() {
    this.router.navigate(["/projects"]);
  }

  goToProject(project: Project) {
    this.router.navigate(["/project", project.id]);
  }

  goToEditProject(project: Project) {
    this.router.navigate(["/project/edit", project.id]);
  }

  deleteProject(project: Project) {
    this.adminService.deleteProjectById(project.id)
      .subscribe(() => this.goToProjectList());
  }

}
