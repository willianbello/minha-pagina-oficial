import { NgModule } from '@angular/core';

import { WgparkRoutingModule } from './wgpark-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import {WgParkComponent} from './wgpark.component';
import {SharedModule} from '../shared/shared.module';
import { HeaderComponent } from './shared/header/header.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    PrincipalComponent,
    WgParkComponent,
    HeaderComponent,
  ],
  imports: [
    WgparkRoutingModule,
    SharedModule,
    MatButtonToggleModule,
    MatTooltipModule,
  ]
})
export class WgParkModule { }
