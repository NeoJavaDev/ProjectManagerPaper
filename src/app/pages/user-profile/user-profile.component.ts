import { HttpErrorResponse } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AdminService } from "app/layouts/admin-layout/admin.service";
import { User } from "../crud/user/model/user";

@Component({
  selector: "user-cmp",
  moduleId: module.id,
  templateUrl: "user-profile.component.html",
})
export class UserProfileComponent implements OnInit {
  @Input()
  user: User | any;
  users: User[] | any;

  constructor(private adminService: AdminService, private router: Router,private route: ActivatedRoute) {}

  ngOnInit() {
    this.getUsers();
    this.users = this.adminService.getUsers();

    const userId: string | null = this.route.snapshot.paramMap.get("id");
    if (true) {
      this.adminService
        .getUserById(1)
        .subscribe((user) => (this.user = user));
    }
  }

  onSubmit() {
    console.log("Submit form !");
    this.router.navigate(["/user", this.user.id]);
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

}
