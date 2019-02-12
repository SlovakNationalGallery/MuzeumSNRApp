import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OsobnostiCardsPage } from './osobnosti-cards.page';

const routes: Routes = [
  {
    path: '',
    component: OsobnostiCardsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OsobnostiCardsPage]
})
export class OsobnostiCardsPageModule {}
