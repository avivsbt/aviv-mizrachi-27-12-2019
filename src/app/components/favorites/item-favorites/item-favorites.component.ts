import { Component, OnInit, Input } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { Favorite } from 'src/app/models/favorite.model';


@Component({
    selector: 'app-item-favorites',
    templateUrl: './item-favorites.component.html',
    styleUrls: ['./item-favorites.component.css']
})
export class ItemFavoritesComponent implements OnInit {

    public faMinus = faMinus;
    @Input() favorite: Favorite;

    constructor(

    ) { }

    ngOnInit() {

    }
}
