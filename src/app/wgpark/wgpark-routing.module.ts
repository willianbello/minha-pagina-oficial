import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WgParkComponent} from './wgpark.component';
import {PrincipalComponent} from './components/principal/principal.component';


const routes: Routes = [
  { path: '', component: WgParkComponent,
    children: [
      { path: 'wgpark', component: PrincipalComponent },
    ],
  },
];

export const WgparkRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
