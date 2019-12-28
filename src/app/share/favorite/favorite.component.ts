import { Component, OnInit, Input } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FavoriteService } from './favorite.service';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  public faPlus = faPlus;
  public faMinus = faMinus;

  @Input() selected: boolean;
  @Input() id: string;
  @Input() type: string;

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit() {

  }

  add() {
    this.favoriteService.addFavorite(this.id, this.type);
  }

  remove() {
    this.favoriteService.removeFavorite(this.id, this.type)
  }
  

}
