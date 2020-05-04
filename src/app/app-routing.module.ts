import { Routes, RouterModule } from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NotFoundComponent} from './shared/components/not-found/not-found.component';


const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  { path: 'home', loadChildren: './home/home.module#HomeModule' },
  { path: 'wgpark', loadChildren: './wgpark/wgpark.module#WgParkModule' },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});

