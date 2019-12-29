import { Component, OnInit } from '@angular/core';

import { SpinnerService } from 'src/app/share/spinner/spinner.service';
import { AlertService } from 'src/app/share/alert/alert.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {

  constructor(
    private spinnerService: SpinnerService,
    private alertService: AlertService,
    private weatherService: WeatherService
  ) { }

  ngOnInit() {
    /*this.spinnerService.show();
    this.alertService.success('Success!!');
    this.alertService.error('Error!!');
    this.alertService.info('info!!');
    this.alertService.warn('warn!!');

    setTimeout(() =>{
      this.spinnerService.hide();
      this.alertService.clear();
    },2000);*/

    /*this.weatherService.geoposition(40.8, -77.8).subscribe(res => {
      console.log(res);
    });*/

    /*this.weatherService.autocomplete('tel').subscribe(res => {
      console.log(res);
    });*/

    /*this.weatherService.currentConditions('2325057').subscribe(res => {
      console.log(res);
    });*/  

    /*this.weatherService.forecasts('2325057').subscribe(res => {
      console.log(res);
    });*/  

  }

  onKey(e) {
    if (e.target.value.length >= 3) {
      console.log(e.target.value);
    }
  }

}
