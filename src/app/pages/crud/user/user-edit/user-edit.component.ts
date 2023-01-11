import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/layouts/admin-layout/admin.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
  ]
})
export class UserEditComponent implements OnInit {

  @Input() user: User | any;
  isAddForm: boolean;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes("add");
    const userId: string | null = this.route.snapshot.paramMap.get("id");
    if (userId) {
      this.adminService
        .getUserById(+userId)
        .subscribe((user) => (this.user = user));
    }
  }

  public onSubmit() {
    console.log("Submit form !");
    if (this.isAddForm) {
      this.adminService
        .addUser(this.user)
        .subscribe((user: User) => this.router.navigate(["/user", user.id]));
    } else {
      this.adminService
        .updateUser(this.user)
        .subscribe(() => this.router.navigate(["/user", this.user.id]));
    }
  }

}
