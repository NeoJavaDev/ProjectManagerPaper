import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { Project } from '../../project/model/project';
import { User } from '../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})
export class UserEditComponent implements OnInit {

  @Input() user: User | any;
  projects: Project[] | any;
  isAddForm: boolean;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProjects();
    this.isAddForm = this.router.url.includes("add");
    const userId: string | null = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.adminService
        .getUserById(+userId)
        .subscribe((user) => (this.user = user));
    }
  }

  public hasProject(project: Project): boolean {
    if (this.user.project.id == project.id) {
      return true;
    }
  }

  public selectProject($event: Event, project: Project) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.user.project = project;
    } else {
      const i = this.user.project.indexOf(project);
      this.user.project.splice(i, 1);
    }
  }

  public getProjects(): void {
    this.adminService.getProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onSubmit() {
    console.log("Submit form !");
    if (this.isAddForm) {
      this.adminService
        .addUser(this.user)
        .subscribe(() => this.router.navigate(["/users"]));
    } else {
      this.adminService
        .updateUser(this.user)
        .subscribe(() => this.router.navigate(["/user", this.user.id]));
    }
  }



}
