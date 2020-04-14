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
      title: 'Teste',
      icon: 'schedule',
      url: 'teste'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidenavCollapsed() {
    this.isExpanded = !this.isExpanded;
    this.state = 'collapsed';
  }

  toggleSidenav(isExpanded) {
    this.isExpanded = isExpanded;
  }
}
