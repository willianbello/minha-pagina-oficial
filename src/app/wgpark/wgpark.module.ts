import { NgModule } from '@angular/core';

import { WgparkRoutingModule } from './wgpark-routing.module';
import { PrincipalComponent } from './components/principal/principal.component';
import {WgParkComponent} from './wgpark.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [
    PrincipalComponent,
    WgParkComponent
  ],
  imports: [
    WgparkRoutingModule,
    SharedModule,
  ]
})
export class WgParkModule { }
