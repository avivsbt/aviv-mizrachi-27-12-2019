import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { CoreModule } from '../../core/core.module';
import { FavoritesComponent } from '../favorites/favorites.component';
import { ItemFavoritesComponent } from './item-favorites/item-favorites.component';


@NgModule({
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    CoreModule.forRoot(),
  ],
  exports: [
    FavoritesComponent,
    ItemFavoritesComponent
  ],
  declarations: [
    FavoritesComponent,
    ItemFavoritesComponent
  ],
  providers: [],
})

export class FavoritesModule { }
