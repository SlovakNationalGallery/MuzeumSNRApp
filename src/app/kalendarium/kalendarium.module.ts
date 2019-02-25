import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { KalendariumPage } from './kalendarium.page';

const routes: Routes = [
  {
    path: '',
    component: KalendariumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [KalendariumPage]
})
export class KalendariumPageModule {}
