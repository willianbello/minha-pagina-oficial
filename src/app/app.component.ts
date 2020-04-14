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
      title: 'Home',
      icon: 'home',
      url: '/home'
    },
    {
      title: 'Schedule',
      icon: 'schedule',
      url: '/schedule'
    }
  ];

  toggleSidenavCollapsed() {
    this.isExpanded = !this.isExpanded;
    this.state = 'collapsed';
  }

  toggleSidenavHidden() {
    this.isExpanded = !this.isExpanded;
    this.state = 'hidden';
  }

  toggleSidenav(isExpanded) {
    this.isExpanded = isExpanded;
  }

  open() {
    this.isExpanded = true;
  }

  close() {
    this.isExpanded = false;
  }
}
