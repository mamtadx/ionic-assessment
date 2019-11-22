import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from '../../components/components.module'
import { IonicModule } from '@ionic/angular';

import { MulitpleAnsQPage } from './mulitple-ans-q.page';

const routes: Routes = [
  {
    path: '',
    component: MulitpleAnsQPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MulitpleAnsQPage]
})
export class MulitpleAnsQPageModule {}
