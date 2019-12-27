import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CoreModule } from '../../core/core.module';

import { WeatherComponent } from './weather.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { SearchComponent } from './search/search.component';
import { SideButtonsComponent } from './side-buttons/side-buttons.component';


@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    CoreModule.forRoot(),
  ],
  exports: [
    WeatherComponent,
    DailyForecastComponent, 
    SearchComponent,
    SideButtonsComponent
  ],
  declarations: [
    WeatherComponent,
    DailyForecastComponent, 
    SearchComponent,
    SideButtonsComponent
  ],
  providers: [],
})

export class WeatherModule { }
