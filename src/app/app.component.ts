import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingService } from './services/settings.service';
import { Subscription } from 'rxjs';
import { WeatherStoreService } from './services/weather-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  private locationSubscription: Subscription;

  constructor(
    public settingService: SettingService,
    private weatherStoreService: WeatherStoreService
  ) {
  }

  ngOnInit(): void {
    this.locationSubscription = this.settingService.locationState.subscribe(location => {
      this.weatherStoreService.fetchByLocation(location);
    });
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
  }

}
