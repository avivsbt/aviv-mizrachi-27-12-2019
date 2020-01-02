import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
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

  @ViewChild('searchInput', { static: false }) searchInput: ElementRef;
  public faTimes = faTimes;
  public resultSearch: Autocomplete[] = [];

  constructor(
    private apiService: ApiService,
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

  search(): void {
    if (this.searchInput.nativeElement.value.length >= 2) {
      this.apiService.autocomplete(this.searchInput.nativeElement.value).subscribe(res => {
        this.resultSearch = res;
      });
    }
  }

  clearSearch(): void {
    this.resultSearch = [];
    this.searchInput.nativeElement.value = '';
  }

  selectSearch(key: string, LocalizedName: string, Country: string) {
    this.clearSearch();
    this.weatherStoreService.fetch(key, LocalizedName, Country);
  }

}
