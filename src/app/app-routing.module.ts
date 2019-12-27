import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WeatherComponent
  },
  {
    path: 'favorites',
    loadChildren: () => import('./components/favorites/favorites.module').then(mod => mod.FavoritesModule),
    //component: FavoritesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
