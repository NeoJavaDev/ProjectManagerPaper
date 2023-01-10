import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "app/layouts/admin-layout/admin.service";
import { Task } from "../../task/model/task";
import { User } from "../../user/model/user";
import { Project } from "../model/project";

@Component({
  selector: "app-project-edit",
  templateUrl: "./project-edit.component.html",
  styles: [],
})
export class ProjectEditComponent implements OnInit {
  @Input() project: Project | any;
  projects: Project[] | any;
  tasks: Task[] | any;
  user: User | any;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getTasks();
    const projectId: string | null = this.route.snapshot.paramMap.get("id");
    if (projectId) {
      this.adminService
        .getProjectById(+projectId)
        .subscribe((project) => (this.project = project));
      console.log(this.project);
    }
  }

  public hasTask(tasks: Task[]): boolean {
    for(let task of tasks) {
      let i = 0;
      if(this.project.tasks.includes(task)) {
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

  onSubmit() {
    console.log("Submit form !");
    this.adminService
      .updateProject(this.project)
      .subscribe((project: Project) => {
        if (project) {
          this.router.navigate(["/project", project.id]);
        }
      });
    this.router.navigate(["/project", this.project.id]);
  }
}
