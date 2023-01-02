import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AdminLayoutRoutes } from "./admin-layout.routing";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapsComponent } from "../../pages/maps/maps.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TableComponent } from "../../pages/table/table.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UpgradeComponent } from "../../pages/upgrade/upgrade.component";
import { UserProfileComponent } from "../../pages/user-profile/user-profile.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UserListComponent } from "app/pages/crud/user/user-list/user-list.component";
import { ProjectListComponent } from "app/pages/crud/project/project-list/project-list.component";
import { TaskListComponent } from "app/pages/crud/task/task-list/task-list.component";


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
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UserListComponent,
    ProjectListComponent,
    TaskListComponent
  ],
})
export class AdminLayoutModule {}
