import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "app/layouts/admin-layout/admin.service";
import { Project } from "../../project/model/project";
import { Task } from "../model/task";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styles: [],
})
export class TaskEditComponent implements OnInit {
  @Input() task: Task | any;
  tasks: Task[] | any;
  project: Project | any;
  projects: Project[] | any;
  isAddForm: boolean;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.isAddForm = this.router.url.includes("add");
    this.getProjects();
    const taskId: string | null = this.route.snapshot.paramMap.get("id");
    if (taskId) {
      this.adminService
        .getTaskById(+taskId)
        .subscribe((task) => (this.task = task));
    }
  }

  public hasProject(project: Project): boolean {
    if (this.task.project.id == project.id) {
      return true;
    }
  }

  public selectProject($event: Event, project: Project) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.task.project = project;
    } else {
      const i = this.task.project.indexOf(project);
      this.task.project.splice(i, 1);
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
        .addTask(this.task)
        .subscribe((task: Task) => this.router.navigate(["/task", task.id]));
    } else {
      this.adminService
        .updateTask(this.task)
        .subscribe(() => this.router.navigate(["/task", this.task.id]));
    }
  }
}
