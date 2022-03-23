import { Component } from '@angular/core';
import { icons } from '@shared/constants';
import { MenuItems } from '@shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'post-app';
  menuItems: MenuItems[] = [
    {
      icon: icons.faTachometer,
      title: 'Dashboard',
      route: '/dashboard',
    },
    {
      icon: icons.faClipboard,
      title: 'User Posts',
      route: '/post',
    },
  ];
  constructor() {}
}
