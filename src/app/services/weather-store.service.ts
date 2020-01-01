import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { Location } from '../models/location.model';
import { Weather } from '../models/weather.model';
import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class WeatherStoreService {

    private currentWeatherKey: string;
    private weatherKeys: string[] = [];

    constructor(
        private apiService: ApiService
    ) {}

    private readonly _weathers = new BehaviorSubject<Weather[]>([]);
    readonly weathers$ = this._weathers.asObservable();

    readonly currentWeather$ = this.weathers$.pipe(
        map(weathers => weathers.find(w => w.Key === this.currentWeatherKey))
    )

    get weathers(): Weather[] {
        return this._weathers.getValue();
    }

    set weathers(val: Weather[]) {
        this._weathers.next(val);
    }

    async fetchByLocation(location: Location) {
        const geoposition = await this.apiService.geoposition(location.latitude, location.longitude).toPromise();
        this.fetch(geoposition.Key, geoposition.LocalizedName, geoposition.Country.ID);
    }

    async fetch(key: string, LocalizedName: string, Country: string) {
        this.currentWeatherKey = key;
        if (!this.weatherKeys.includes(key)) {
            const currentConditions = await this.apiService.currentConditions(key).toPromise();
            const forecasts = await this.apiService.forecasts(key).toPromise();
            const current = new Weather(
                key,
                LocalizedName,
                Country,
                currentConditions[0].LocalObservationDateTime,
                currentConditions[0].Temperature,
                currentConditions[0].WeatherIcon,
                currentConditions[0].WeatherText,
                forecasts.DailyForecasts
            );
            this.weatherKeys = [...this.weatherKeys, key];
            this.weathers = [...this.weathers, current];
        }
        else{
            this.weathers = [...this.weathers];
        }
    }
}