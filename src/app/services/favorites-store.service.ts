import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Favorite } from '../models/favorite.model';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class FavoriteStoreService {

    private favoriteStoreKeys: string[] = [];
    private currentKeys: any = [];

    constructor(
        private apiService: ApiService,
    ) { }

    private readonly _favorites = new BehaviorSubject<Favorite[]>([]);
    readonly favorites$ = this._favorites.asObservable();

    readonly currentsFavorites$ = this.favorites$.pipe(
        map(favorites => favorites.filter(f => this.currentKeys.includes(f.Key)))
    )  

    get favorites(): Favorite[] {
        return this._favorites.getValue();
    }

    set favorites(val: Favorite[]) {
        this._favorites.next(val);
    }

    fetchByKey(keys: string[]) {
        this.currentKeys = keys;
        const keysNotExists = keys.filter(key => !this.favoriteStoreKeys.includes(key));
        keysNotExists.forEach(key => this.fetch(key));
    }

    async fetch(key: string) {
        const currentConditions = await this.apiService.currentConditions(key).toPromise();
        const currentLocationKey = await this.apiService.locationKey(key).toPromise();
        const current = new Favorite(
            key,
            currentLocationKey.LocalizedName,
            currentLocationKey.Country.ID,
            currentConditions[0].Temperature,
            currentConditions[0].WeatherIcon,
            currentConditions[0].WeatherText,
        );
        this.favorites = [...this.favorites, current];
        this.favoriteStoreKeys = [...this.favoriteStoreKeys, key]
    }
}