import { Component, OnInit } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-item-favorites',
    templateUrl: './item-favorites.component.html',
    styleUrls: ['./item-favorites.component.css']
})
export class ItemFavoritesComponent implements OnInit {

    public faMinus = faMinus;

    constructor(

    ) { }

    ngOnInit() {

    }
}
