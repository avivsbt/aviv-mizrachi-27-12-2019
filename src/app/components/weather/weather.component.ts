import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { SettingService } from 'src/app/services/settings.service';
import { WeatherStoreService } from 'src/app/services/weather-store.service';
import { Subscription } from 'rxjs';
import { Weather } from '../../models/weather.model';
import { Autocomplete } from '../../models/autocomplete.model';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit, OnDestroy {

  private currentWeatherSubscription: Subscription;
  public currentWeather: Weather;

  private isCelsiusSubscription: Subscription;
  public isCelsius: boolean;

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  public faTimes = faTimes;
  public resultSearch: Autocomplete[];

  constructor(
    private weatherService: WeatherService,
    public settingService: SettingService,
    private weatherStoreService: WeatherStoreService
  ) { }

  ngOnInit(): void {
    this.currentWeatherSubscription = this.weatherStoreService.currentWeather$.subscribe(res => {
      this.currentWeather = res;
      console.log(res);
    });

    this.isCelsiusSubscription = this.settingService.unitCelsiuState.subscribe(res => {
      this.isCelsius = res;
    });
  }

  ngOnDestroy(): void {
    this.currentWeatherSubscription.unsubscribe();
    this.isCelsiusSubscription.unsubscribe();
  }

  search(): void {
    if (this.searchInput.nativeElement.value.length >= 3) {
      this.weatherService.autocomplete(this.searchInput.nativeElement.value).subscribe(res => {
        this.resultSearch = res;
      });
    }
  }

  clearSearch(): void {
    this.resultSearch = [];
    this.searchInput.nativeElement.value = '';
  }

  selectCurrentWeather(key: string, LocalizedName: string, Country: string) {
    this.clearSearch();
    this.weatherStoreService.fetchByKey(key, LocalizedName, Country);
  }

}
