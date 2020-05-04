import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isExpanded = true;
  state = 'collapsed';

  menuItems = [
    {
      title: 'Inicio',
      icon: 'home',
      url: ''
    },
    {
      title: 'WGPark 2.0',
      icon: 'schedule',
      url: 'wgpark'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
