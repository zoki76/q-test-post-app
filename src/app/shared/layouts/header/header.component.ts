import { Component, OnInit } from '@angular/core';
import { icons } from '@shared/constants';

@Component({
  selector: 'q-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  icons = icons;
  constructor() {}

  ngOnInit(): void {}
}
