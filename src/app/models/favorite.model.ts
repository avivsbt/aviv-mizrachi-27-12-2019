import { Temperature } from './current-conditions.model';

export class Favorite {
    Key: string;
    Name: string;
    Country: string;
    Temperature: Temperature;
    WeatherIcon: number;
    WeatherText: string;

    constructor(
        Key: string,
        Name: string,
        Country: string,
        Temperature: Temperature,
        WeatherIcon: number,
        WeatherText: string,
        ) {
        this.Key = Key;
        this.Name = Name;
        this.Country = Country;
        this.Temperature = Temperature;
        this.WeatherIcon = WeatherIcon;
        this.WeatherText = WeatherText;
    }
}

