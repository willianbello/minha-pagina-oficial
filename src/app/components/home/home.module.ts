import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import {PrincipalComponent} from '../principal/principal.component';
import {HomeComponent} from './home.component';
import {SharedModule} from '../../shared/shared.module';
import {GithubService} from '../../shared/services/github/github.service';

@NgModule({
  declarations: [
    PrincipalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    SharedModule,
  ],
  providers: [GithubService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
