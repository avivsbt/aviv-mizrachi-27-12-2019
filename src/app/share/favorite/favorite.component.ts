import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FavoriteService } from './favorite.service';
import { Subscription } from 'rxjs';
import { AlertService } from '../alert/alert.service';

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
    private favoriteService: FavoriteService,
    private alertService: AlertService
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
    this.alertService.info('Item added to Favorites list');
    this.favoriteService.addFavorite(this.id, this.type);
    setTimeout(() => {
      this.alertService.clear();
    }, 2000);    
  }

  remove(): void {
    this.alertService.info('Item removed to favorites list');
    this.favoriteService.removeFavorite(this.id, this.type)
    setTimeout(() => {
      this.alertService.clear();
    }, 2000);
  }

  active(): boolean {
    if (this.favorite) {
      return this.favorite.includes(this.id);
    }
  }

}
