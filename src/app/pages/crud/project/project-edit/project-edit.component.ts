import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { Project } from '../model/project';

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styles: [
  ]
})
export class ProjectEditComponent implements OnInit {

  @Input() project: Project|any;
  projects: Project[]|any;

  constructor(private adminService: AdminService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.projects = this.adminService.getProjects();
    const projectId: string|null = this.route.snapshot.paramMap.get('id');
    if(projectId) {
      this.adminService.getProjectById(+projectId)
      .subscribe(project => this.project = project);
      console.log(this.project)
    }
  }

  onSubmit() {
    console.log('Submit form !')
    this.router.navigate(['/project', this.project.id]);
  }

}
