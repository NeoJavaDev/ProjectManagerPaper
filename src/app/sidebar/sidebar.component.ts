import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/user',          title: 'Users',      icon:'nc-single-02',  class: '' },
    { path: '/maps',          title: 'Projects',              icon:'nc-pin-3',      class: '' },
    { path: '/notifications', title: 'Tasks',     icon:'nc-bell-55',    class: '' },
    { path: '/notifications', title: '!NOTIFICATIONS!',     icon:'nc-bell-55',    class: '' },
    { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' }
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
