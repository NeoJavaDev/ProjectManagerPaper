import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/user',           title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/users',          title: 'User List',      icon:'nc-single-02',  class: '' },
    { path: '/projects',       title: 'Project List',         icon:'nc-bank',       class: '' },
    { path: '/tasks',          title: 'Task List',      icon:'nc-single-02',  class: '' },
    { path: '/maps',           title: 'TO BE DELETE',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications',  title: 'TO BE DELETE',     icon:'nc-bell-55',    class: '' },
    { path: '/notifications',  title: 'TO BE DELETE',     icon:'nc-bell-55',    class: '' },
    { path: '/table',          title: 'TO BE DELETE',        icon:'nc-tile-56',    class: '' }
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
