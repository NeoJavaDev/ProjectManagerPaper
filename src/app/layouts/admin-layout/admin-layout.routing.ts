import { Routes } from "@angular/router";
import { ProjectAddComponent } from "app/pages/crud/project/project-add/project-add.component";
import { ProjectEditComponent } from "app/pages/crud/project/project-edit/project-edit.component";
import { ProjectFocusComponent } from "app/pages/crud/project/project-focus/project-focus.component";
import { ProjectListComponent } from "app/pages/crud/project/project-list/project-list.component";
import { TaskAddComponent } from "app/pages/crud/task/task-add/task-add.component";
import { TaskEditComponent } from "app/pages/crud/task/task-edit/task-edit.component";
import { TaskFocusComponent } from "app/pages/crud/task/task-focus/task-focus.component";
import { TaskListComponent } from "app/pages/crud/task/task-list/task-list.component";
import { UserAddComponent } from "app/pages/crud/user/user-add/user-add.component";
import { UserEditComponent } from "app/pages/crud/user/user-edit/user-edit.component";
import { UserFocusComponent } from "app/pages/crud/user/user-focus/user-focus.component";
import { UserListComponent } from "app/pages/crud/user/user-list/user-list.component";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "user", component: UserProfileComponent },
  { path: "icons", component: IconsComponent },
  { path: "notifications", component: NotificationsComponent },

  { path: "user/add", component: UserAddComponent },
  { path: "project/add", component: ProjectAddComponent },
  { path: "task/add", component: TaskAddComponent },

  { path: "users", component: UserListComponent },
  { path: "projects", component: ProjectListComponent },
  { path: "tasks", component: TaskListComponent },

  { path: "user/:id", component: UserFocusComponent },
  { path: "project/:id", component: ProjectFocusComponent },
  { path: "task/:id", component: TaskFocusComponent },

  { path: "user/edit/:id", component: UserEditComponent },
  { path: "project/edit/:id", component: ProjectEditComponent },
  { path: "task/edit/:id", component: TaskEditComponent }

];
