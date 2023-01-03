import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-focus',
  templateUrl: './user-focus.component.html',
  styles: [
  ]
})
export class UserFocusComponent implements OnInit {

  @Input() user: User|any;
  users: User[]|any;

  constructor(private adminService: AdminService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.users = this.adminService.getUsers();
    const userId: string|null = this.route.snapshot.paramMap.get('id');
    if(userId) {
      this.adminService.getUserById(+userId)
      .subscribe(user => this.user = user);
    }
  }

  onSubmit() {
    console.log('Submit form !')
    this.router.navigate(['/user', this.user.id]);
  }

}
