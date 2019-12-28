import { Directive, OnInit, HostListener, Input } from '@angular/core';
import { StorageService } from '../../services/local-storage.service';
import * as Moment from 'moment';

@Directive({
    selector: '[favorite]'
})
export class FavoriteDirective implements OnInit {

    //@Input() id: string;
    //@Input() type: string;

    constructor(
        //private storageService: StorageService
    ) { }

    @HostListener('click', ['$event.target'])

    onClick() {

        alert();

        /*let storage = this.storageService.get<any>(this.type);
        let favoritesArray: any[] = [];

        if (!storage) storage = [];

        if (storage.includes(this.id)) {
            favoritesArray = storage.filter(item => item !== this.id);
        }
        else {
            favoritesArray = [...storage, this.id];
        }

        this.storageService.set(this.type, favoritesArray, Moment().add(30, 'day').toDate());*/

    }

    ngOnInit() {

    }


}