import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { SettingService } from './services/settings.service';
import { Subscription } from 'rxjs';
import { WeatherStoreService } from './services/weather-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  private locationSubscription: Subscription;
  //private unitSubscription: Subscription;

  constructor(
    public settingService: SettingService,
    private weatherStoreService: WeatherStoreService
  ) {
  }

  ngOnInit(): void {
    this.locationSubscription = this.settingService.locationState.subscribe(location => {
      this.weatherStoreService.fetchByLocation(location);
    });
    /*this.unitSubscription = this.settingService.unitCelsiuState.subscribe(unit => {
      console.log(unit)
    });*/
    //setTimeout(()=>{},1500)
    
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy(): void {
    this.locationSubscription.unsubscribe();
    //this.unitSubscription.unsubscribe();
  }

}
