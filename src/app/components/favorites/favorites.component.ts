import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from 'src/app/services/local-storage.service';
import { FavoriteStoreService } from 'src/app/services/favorites-store.service';
import { Subscription } from 'rxjs';
import { Favorite } from 'src/app/models/favorite.model';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})

export class FavoritesComponent implements OnInit, OnDestroy {

  private favoriteStorage: string[] = this.storageService.get<string[]>('favorite');

  private favoriteSubscription: Subscription;
  public favorites: Favorite[];

  constructor(
    private storageService: StorageService,
    private favoritesService: FavoriteStoreService
  ) {
    this.favoritesService.fetchByKeys(this.favoriteStorage);
  }

  ngOnInit(): void {
    this.favoriteSubscription = this.favoritesService.currentsFavorites$.subscribe(res => {
      this.favorites = res;
    });
  }

  ngOnDestroy(): void {
    this.favoriteSubscription.unsubscribe();
  }

}
