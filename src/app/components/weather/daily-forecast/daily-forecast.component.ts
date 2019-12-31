import { Component, OnInit, Input } from '@angular/core';
import { Forecasts } from 'src/app/models/forecasts.model';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {

  @Input() forecast: Forecasts;

  constructor(

  ) { }

  ngOnInit(): void {

  }

}
