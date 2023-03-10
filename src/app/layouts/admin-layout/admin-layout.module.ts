import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ProjectEditComponent } from "app/pages/crud/project/project-edit/project-edit.component";
import { ProjectFocusComponent } from "app/pages/crud/project/project-focus/project-focus.component";
import { ProjectListComponent } from "app/pages/crud/project/project-list/project-list.component";
import { TaskEditComponent } from "app/pages/crud/task/task-edit/task-edit.component";
import { TaskFocusComponent } from "app/pages/crud/task/task-focus/task-focus.component";
import { TaskListComponent } from "app/pages/crud/task/task-list/task-list.component";
import { UserEditComponent } from "app/pages/crud/user/user-edit/user-edit.component";
import { UserFocusComponent } from "app/pages/crud/user/user-focus/user-focus.component";
import { UserListComponent } from "app/pages/crud/user/user-list/user-list.component";
import { ProjectAddComponent } from '../../pages/crud/project/project-add/project-add.component';
import { TaskAddComponent } from '../../pages/crud/task/task-add/task-add.component';
import { UserAddComponent } from '../../pages/crud/user/user-add/user-add.component';
import { ArrayFixPipe } from '../../shared/pipe/array-fix-pipe.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    IconsComponent,
    NotificationsComponent,
    UserListComponent,
    ProjectListComponent,
    TaskListComponent,
    UserEditComponent,
    ProjectEditComponent,
    TaskEditComponent,
    UserFocusComponent,
    ProjectFocusComponent,
    TaskFocusComponent,
    ProjectAddComponent,
    TaskAddComponent,
    UserAddComponent,
    ArrayFixPipe
  ],
})
export class AdminLayoutModule {}
