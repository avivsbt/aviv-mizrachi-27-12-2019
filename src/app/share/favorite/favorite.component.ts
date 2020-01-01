import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FavoriteService } from './favorite.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})

export class FavoriteComponent implements OnInit, OnDestroy {

  public faPlus = faPlus;
  public faMinus = faMinus;

  @Input() id: string;
  @Input() type: string;

  private favoriteSubscription: Subscription;
  public favorite: any[];

  constructor(
    private favoriteService: FavoriteService
  ) { }

  ngOnInit(): void {
    this.favoriteService.setFavorite(this.type);
    this.favoriteSubscription = this.favoriteService.favoriteState.subscribe(res => {
      this.favorite = res;
    });
  }

  ngOnDestroy(): void {
    this.favoriteSubscription.unsubscribe();
  }

  add(): void {
    this.favoriteService.addFavorite(this.id, this.type);
  }

  remove(): void {
    this.favoriteService.removeFavorite(this.id, this.type)
  }

  active(): boolean {
    if (this.favorite) {
      return this.favorite.includes(this.id);
    }
  }

}
