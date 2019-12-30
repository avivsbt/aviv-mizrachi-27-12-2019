import { Component, OnInit, OnDestroy } from '@angular/core';

import { SpinnerService } from 'src/app/share/spinner/spinner.service';
import { AlertService } from 'src/app/share/alert/alert.service';
import { WeatherService } from 'src/app/services/weather.service';
import { SettingService } from 'src/app/services/settings.service';
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
    private spinnerService: SpinnerService,
    private alertService: AlertService,
    private weatherService: WeatherService,
    public settingService: SettingService,
    private weatherStoreService: WeatherStoreService
  ) { }

  ngOnInit(): void{
    
    this.settingService.setUnitTemperature();

    this.currentWeatherSubscription = this.weatherStoreService.currentWeather$.subscribe(res => {
      this.currentWeather = res;
      console.log(res);
    });

    /*this.spinnerService.show();
    this.alertService.success('Success!!');
    this.alertService.error('Error!!');
    this.alertService.info('info!!');
    this.alertService.warn('warn!!');

    setTimeout(() =>{
      this.spinnerService.hide();
      this.alertService.clear();
    },2000);*/

  }

  ngOnDestroy(): void {
    this.currentWeatherSubscription.unsubscribe();
  }

  onKey(e) {
    if (e.target.value.length >= 3) {
      console.log(e.target.value);
    }
  }

}
