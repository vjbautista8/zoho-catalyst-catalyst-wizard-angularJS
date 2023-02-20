import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';



export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/introduction',    title: 'Introduction',      icon:'', class: '' },
    { path: '/zohocatalyst',    title: 'Zoho Catalyst',     icon:'', class: '' },
   
    
    // { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    // { path: '/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    
    // { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];
@Component({
    selector: 'app-zohocatalyst',
    moduleId: module.id,
    templateUrl: 'zohocatalyst.component.html'
})
export class ZohocatalystComponent implements OnInit{

    public menuItems: any[];
    // public menuItems: [
    //     {name}
    // ];
    ngOnInit(){
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
      
}
