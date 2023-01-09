import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styles: [
  ]
})
export class TaskEditComponent implements OnInit {

  @Input() task: Task|any;
  tasks: Task[]|any;

  constructor(private adminService: AdminService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.tasks = this.adminService.getTasks();
    const taskId: string|null = this.route.snapshot.paramMap.get('id');
    if(taskId) {
      this.adminService.getTaskById(+taskId)
      .subscribe(task => this.task = task);
    }
  }

  onSubmit() {
    console.log('Submit form !');
    this.adminService.updateTask(this.task)
      .subscribe((task) => {
        if(task) {
          this.router.navigate(['/task', this.task.id]);
        }
      });


  }
}
