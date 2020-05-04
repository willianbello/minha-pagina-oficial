import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from '../material/material.module';
import {SidenavModule} from 'angular-ng-sidenav';
import { HeaderComponent } from './components/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { DialogErroComponent } from './components/dialog-erro/dialog-erro.component';
import {GithubService} from './services/github/github.service';
import {HttpClientModule} from '@angular/common/http';
import {DialogService} from './services/dialog/dialog.service';
import {MatListModule} from '@angular/material/list';
import {NotFoundComponent} from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    DialogErroComponent,
    NotFoundComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SidenavModule,
    FlexLayoutModule,
    MatDialogModule,
    HttpClientModule,
    MatListModule,
  ],
  exports: [
    MaterialModule,
    SidenavModule,
    HeaderComponent,
    FlexLayoutModule,
    HttpClientModule,
    MatListModule,
    NotFoundComponent
  ],
  providers: [
    GithubService,
    DialogService,
    { provide: MatDialogRef, useValue: {  }},
    { provide: MAT_DIALOG_DATA, useValue: {  }},
  ]
})
export class SharedModule { }
