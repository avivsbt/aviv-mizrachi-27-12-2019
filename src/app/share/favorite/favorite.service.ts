import { Injectable } from '@angular/core';
import { StorageService } from 'src/app/services/local-storage.service';
import * as Moment from 'moment';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })

export class FavoriteService {

    private favorite: any;

    constructor(
        private storageService: StorageService
    ) { }

    addFavorite(id: string, type: string) {
        
        
        if (!this.favorite) {
            this.storageService.set(type, [id], Moment().add(30, 'day').toDate());
            console.log('fetch Favorite')
            this.fetchFavorite(type);
        }
        else{
            this.storageService.set(type, [...this.favorite ,id], Moment().add(30, 'day').toDate());
        }

        //this.storageService.set(type, [...this.favorite ,id], Moment().add(30, 'day').toDate());

        console.log(this.favorite)

    }

    removeFavorite(id: string, type: string) {

    }

    fetchFavorite(type) {
        this.favorite = this.storageService.get<any>(type);
    }
}