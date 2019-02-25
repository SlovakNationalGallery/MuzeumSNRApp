import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dokumenty', loadChildren: './dokumenty/dokumenty.module#DokumentyPageModule' },
  { path: 'osobnosti', loadChildren: './osobnosti/osobnosti.module#OsobnostiPageModule' },
  { path: 'osobnosti/:id', loadChildren: './osobnosti-cards/osobnosti-cards.module#OsobnostiCardsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
