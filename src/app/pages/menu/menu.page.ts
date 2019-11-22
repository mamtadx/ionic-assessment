import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public appPages = [
    { title: 'Home', url: '/menu/dashboard/home-tabs/home', icon: 'home' },
    { title: 'Exams', url: '/menu/list', icon: 'list' },
    { title: 'Reports', url: '/menu/list', icon: 'briefcase' },
    { title: 'Share With Friends', url: '/menu/list', icon: 'share' },
    { title: 'Rate Us', url: '/menu/list', icon: 'star-half' },
    { title: 'Profile', url: '/menu/profile/edit', icon: 'person' },
    { title: 'Change Password', url: '/menu/reset-password', icon: 'key' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];
  constructor() { }

  ngOnInit() {
  }


}
