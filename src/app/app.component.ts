import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isExpanded = true;
  state = 'collapsed';

  menuItems = [
    {
      title: 'Inicio',
      icon: 'home',
      url: 'home'
    },
    {
      title: 'WGPark 2.0',
      icon: 'schedule',
      url: 'wgpark'
    }
  ];

  toggleSidenavCollapsed() {
    this.isExpanded = !this.isExpanded;
    this.state = 'collapsed';
  }

  toggleSidenav(isExpanded) {
    this.isExpanded = isExpanded;
  }

  toggleSidenavHidden() {
    this.isExpanded = !this.isExpanded;
    this.state = 'hidden';
  }

  open() {
    this.isExpanded = true;
  }

  close() {
    this.isExpanded = false;
  }
}
