import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'dokumenty', loadChildren: './dokumenty/dokumenty.module#DokumentyPageModule' },
  { path: 'osobnosti', loadChildren: './osobnosti/osobnosti.module#OsobnostiPageModule' },
  { path: 'osobnosti/:id', loadChildren: './osobnosti-cards/osobnosti-cards.module#OsobnostiCardsPageModule' },
  { path: 'kalendarium', loadChildren: './kalendarium/kalendarium.module#KalendariumPageModule' },
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'statne-symboly', loadChildren: './statne-symboly/statne-symboly.module#StatneSymbolyPageModule' },
  { path: 'statne-symboly/:id', loadChildren: './statne-symboly-cards/statne-symboly-cards.module#StatneSymbolyCardsPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
