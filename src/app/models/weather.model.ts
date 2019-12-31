import { Temperature } from '../models/currentConditions.model';
import { Forecasts } from './forecasts.model';

export class Weather {
    Key: string;
    Name: string;
    Country: string;
    DateTime: string;
    Temperature: Temperature;
    WeatherIcon: number;
    WeatherText: string;
    DailyForecasts: Forecasts["DailyForecasts"]

    constructor(
        Key: string,
        Name: string,
        Country: string,
        DateTime: string,
        Temperature: Temperature,
        WeatherIcon: number,
        WeatherText: string,
        DailyForecasts: Forecasts["DailyForecasts"]) {
        this.Key = Key;
        this.Name = Name;
        this.Country = Country;
        this.DateTime = DateTime;
        this.Temperature = Temperature;
        this.WeatherIcon = WeatherIcon;
        this.WeatherText = WeatherText;
        this.DailyForecasts = DailyForecasts;
    }
}