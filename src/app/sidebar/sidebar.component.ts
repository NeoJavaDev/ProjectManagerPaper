import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/user',           title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/dashboard',      title: 'Dashboard',         icon:'nc-chart-pie-36',  class: '' },
    { path: '/users',          title: 'User List',         icon:'nc-circle-10',  class: '' },
    { path: '/projects',       title: 'Project List',      icon:'nc-chart-bar-32',       class: '' },
    { path: '/tasks',          title: 'Task List',         icon:'nc-tile-56',  class: '' },
    { path: '/notifications',  title: 'Notification',      icon:'nc-bell-55',    class: '' }
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
