import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children : [
      // {path: 'homeTab', loadChildren: () => import('../home-tabs/home-tabs.module').then(m => m.HomeTabsPageModule)},
      { path: 'list', loadChildren: () => import('../list/list.module').then(m => m.ListPageModule)},
      { path: 'dashboard', loadChildren: '../home-tabs/home-tabs.module#HomeTabsPageModule' },
      { path: 'reset-password',loadChildren: () => import('../reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)},
      { path: 'profile/:type', loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule) },
      { path: 'mulitple-ans-q/:type', loadChildren: '../mulitple-ans-q/mulitple-ans-q.module#MulitpleAnsQPageModule' },
      { path: 'mulitple-ans-q/:type/:currentQ', loadChildren: '../mulitple-ans-q/mulitple-ans-q.module#MulitpleAnsQPageModule' },
      { path: 'test-result', loadChildren: () => import('../test-result/test-result.module').then( m => m.TestResultPageModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
