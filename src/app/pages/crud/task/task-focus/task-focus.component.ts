import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';

@Component({
  selector: 'app-task-focus',
  templateUrl: './task-focus.component.html',
  styles: [
  ]
})
export class TaskFocusComponent implements OnInit {

  constructor(private adminService: AdminService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const taskId: string | null = this.route.snapshot.paramMap.get('id');
    this.adminService.getTaskById(+taskId)
      .subscribe(response => {
        console.log(response);
      })
  }



}
