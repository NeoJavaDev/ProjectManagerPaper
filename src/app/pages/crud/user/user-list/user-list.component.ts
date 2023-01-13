import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit {
  public users: User[] | undefined;

  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.adminService.getUsers().subscribe(
      (response: User[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  goToUserList() {
    this.router.navigate(["/users"]);
  }

  goToUser(user: User) {
    this.router.navigate(["/user", user.id]);
  }

  goToEditUser(user: User) {
    this.router.navigate(["/user/edit", user.id]);
  }

  deleteUser(user: User) {
    this.adminService.deleteUserById(user.id)
      .subscribe(() => this.goToUserList());
  }

}
