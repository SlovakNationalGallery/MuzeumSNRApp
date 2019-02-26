import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StatneSymbolyPage } from './statne-symboly.page';

const routes: Routes = [
  {
    path: '',
    component: StatneSymbolyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StatneSymbolyPage]
})
export class StatneSymbolyPageModule {}
