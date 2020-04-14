import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';


const routes: Routes = [
  { path: '', loadChildren: './components/home/home.module#HomeModule' },
  { path: 'home', loadChildren: './components/home/home.module#HomeModule' },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

