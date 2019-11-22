import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {ComponentsModule} from '../../components/components.module'

import { IonicModule } from '@ionic/angular';

import { HomeTabsPage } from './home-tabs.page';

const routes: Routes = [
  {
    path: 'home-tabs',
    component: HomeTabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'profile', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'exams', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'reports', loadChildren: '../home/home.module#HomePageModule' }
    ]
  },
  {
    path: '',
    redirectTo: 'home-tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeTabsPage]
})
export class HomeTabsPageModule {}
