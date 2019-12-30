import { Injectable } from '@angular/core';
import { WeatherService } from './weather.service';
import { BehaviorSubject } from 'rxjs';
import { SettingService } from './settings.service';
import { Location } from '../models/location.model';
import { Weather } from '../models/weather.model';
import { CurrentConditions } from '../models/currentConditions.model';
import { Geoposition } from '../models/geoposition.model';

import { map } from 'rxjs/operators'

@Injectable({ providedIn: 'root' })

export class WeatherStoreService {

    private currentWeatherKey: string;

    constructor(
        private weatherService: WeatherService,
        private settingService: SettingService
    ) {

    }

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
        const geoposition = await this.weatherService.geoposition(location.latitude, location.longitude).toPromise();
        const currentConditions = await this.weatherService.currentConditions(geoposition.Key).toPromise();
        const forecasts = await this.weatherService.forecasts(geoposition.Key).toPromise();
        const current =  new Weather(geoposition.Key, currentConditions[0], forecasts, geoposition);

        if(!this.currentWeatherKey){
            this.currentWeatherKey = geoposition.Key;
        }
        this.weathers = [...this.weathers, current];
    }

    async fetchByKey(key: string) {
        /*const currentConditions = await this.weatherService.currentConditions(key).toPromise();
        const forecasts = await this.weatherService.forecasts(key).toPromise();
        const current =  new Weather(key, currentConditions[0], forecasts);
        this.weathers = [...this.weathers, current];
        console.log(this.weathers);*/
    }

}