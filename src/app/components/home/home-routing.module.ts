import {ModuleWithProviders, NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrincipalComponent} from '../principal/principal.component';
import {HomeComponent} from './home.component';
import {TesteComponent} from '../teste/teste.component';


const routes: Routes = [
  { path: '', component: HomeComponent,
    children: [
      { path: '', component: PrincipalComponent },
      { path: 'teste', component: TesteComponent }
    ],
  }
];
export const HomeRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);

