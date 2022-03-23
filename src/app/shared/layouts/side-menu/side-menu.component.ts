import { Component, Input, OnInit } from '@angular/core';
import { MenuItems } from '../../models/menu-items.model';

@Component({
  selector: 'q-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  @Input()
  menuItems: MenuItems[];

  constructor() {}

  ngOnInit(): void {}
}
