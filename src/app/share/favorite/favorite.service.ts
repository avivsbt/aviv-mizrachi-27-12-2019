import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/local-storage.service';
import * as Moment from 'moment';
import { Subject } from 'rxjs';
import { FavoriteStoreService } from 'src/app/services/favorites-store.service';

@Injectable({ providedIn: 'root' })

export class FavoriteService {

    private favorite: any;
    private readonly favoriteSubject = new Subject<any>();
    readonly favoriteState = this.favoriteSubject.asObservable();

    constructor(
        private storageService: StorageService,
        private favoriteStoreService: FavoriteStoreService
    ) { }

    addFavorite(id: string, type: string) {
        if (!this.favorite.includes(id)) {
            this.favorite = [...this.favorite, id];
            this.storageService.set(type, this.favorite, Moment().add(30, 'day').toDate());
            this.favoriteSubject.next(this.favorite);
        }
    }

    removeFavorite(id: string, type: string) {
        if (this.favorite.includes(id)) {
            this.favorite = this.favorite.filter(favoriteId => favoriteId !== id);
            this.storageService.set(type, this.favorite, Moment().add(30, 'day').toDate());
            this.favoriteStoreService.remove(id);
            this.favoriteSubject.next(this.favorite);
        }
    }

    setFavorite(type: string) {
        if (!this.storageService.get<any>(type)) {
            this.storageService.set(type, [], Moment().add(30, 'days').toDate());
        }
        this.favorite = this.storageService.get<any>(type);
        setTimeout(() => {
            this.favoriteSubject.next(this.favorite);
        }, 0);
    }
}