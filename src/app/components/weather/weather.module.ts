import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { CoreModule } from '../../share/core.module';

import { WeatherComponent } from './weather.component';
import { DailyForecastComponent } from './daily-forecast/daily-forecast.component';
import { SideButtonsComponent } from './side-buttons/side-buttons.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  imports: [
    CommonModule,
    WeatherRoutingModule,
    CoreModule.forRoot(),
  ],
  exports: [
    WeatherComponent,
    DailyForecastComponent, 
    SideButtonsComponent,
    SearchComponent
  ],
  declarations: [
    WeatherComponent,
    DailyForecastComponent, 
    SideButtonsComponent,
    SearchComponent
  ],
  providers: [],
})

export class WeatherModule { }
