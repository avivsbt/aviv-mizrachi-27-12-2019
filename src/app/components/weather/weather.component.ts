import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherStoreService } from 'src/app/services/weather-store.service';
import { Subscription } from 'rxjs';
import { Weather } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {

  private currentWeatherSubscription: Subscription;
  public currentWeather: Weather;

  constructor(
    private weatherStoreService: WeatherStoreService
  ) { }

  ngOnInit(): void {
    this.currentWeatherSubscription = this.weatherStoreService.currentWeather$.subscribe(res => {
      this.currentWeather = res;
    });
  }

  ngOnDestroy(): void {
    this.currentWeatherSubscription.unsubscribe();
  }

}
