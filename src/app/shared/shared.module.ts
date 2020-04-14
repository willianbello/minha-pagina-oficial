import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {SidenavModule} from 'angular-ng-sidenav';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavModule,
  ],
  exports: [
    MaterialModule,
    SidenavModule,
    HeaderComponent,
  ]
})
export class SharedModule { }
