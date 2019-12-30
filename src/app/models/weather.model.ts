import { Geoposition } from './geoposition.model';
import { CurrentConditions } from '../models/currentConditions.model';
import { Forecasts } from './forecasts.model';


export class Weather {
    Key:string
    Geoposition: Geoposition;
    CurrentConditions: CurrentConditions;
    Forecasts: Forecasts;

    constructor(Key:string, CurrentConditions: CurrentConditions, Forecasts: Forecasts, Geoposition?: Geoposition)  {
        this.Key = Key;
        this.Geoposition = Geoposition;
        this.CurrentConditions = CurrentConditions;
        this.Forecasts = Forecasts;
    }

}