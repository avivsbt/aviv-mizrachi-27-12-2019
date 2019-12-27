import { Directive, OnInit, HostListener, Input } from '@angular/core';
import { StorageService } from '../local-storage/local-storage.service';
import * as Moment from 'moment';

@Directive({
    selector: '[favorite]'
})
export class FavoriteDirective implements OnInit {

    @Input() idItem: string;
    @Input() type: string;

    constructor(
        private storageService: StorageService
    ) { }

    @HostListener('click', ['$event.target'])

    onClick() {

        let storage = this.storageService.get<any>(this.type);
        let favoritesArray: any[] = [];

        if (!storage) storage = [];

        if (storage.includes(this.idItem)) {
            favoritesArray = storage.filter(item => item !== this.idItem);
        }
        else {
            favoritesArray = [...storage, this.idItem];
        }

        this.storageService.set(this.type, favoritesArray, Moment().add(30, 'day').toDate());

    }

    ngOnInit() {

    }


}