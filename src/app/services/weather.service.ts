import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CONFIG } from '../share/config'
import { Observable, throwError } from 'rxjs';
import { map, catchError, finalize } from "rxjs/operators";
import { SpinnerService } from '../share/spinner/spinner.service';
import { AlertService } from '../share/alert/alert.service';
import { CurrentConditions } from '../models/currentConditions.model';
import { Geoposition } from '../models/geoposition.model';
import { Autocomplete } from '../models/autocomplete.model';
import { Forecasts } from '../models/forecasts.model';

@Injectable({ providedIn: 'root' })

export class WeatherService {

    constructor(
        private httpClient: HttpClient,
        private spinnerService: SpinnerService,
        private alertService: AlertService
    ) { }

    public geoposition(latitude: number, longitude: number): Observable<Geoposition> {
        this.spinnerService.show();
        return this.httpClient.get<Geoposition>(CONFIG.getUrl(CONFIG.endpoints.geoposition + `?apikey=${CONFIG.APIKey.Weather}&q=${latitude},${longitude}`)).pipe(
            catchError(err => {
                this.alertService.error(err.message)
                return throwError(err);
            }),
            finalize(() => {
                this.spinnerService.hide();
            })
        );
    }

    public currentConditions(key: string): Observable<CurrentConditions> {
        this.spinnerService.show();
        return this.httpClient.get<CurrentConditions>(CONFIG.getUrl(CONFIG.endpoints.currentConditions + `${key}?apikey=${CONFIG.APIKey.Weather}`)).pipe(
            catchError(err => {
                this.alertService.error(err.message)
                return throwError(err);
            }),
            finalize(() => {
                this.spinnerService.hide();
            })
        );
    }

    public autocomplete(term: string): Observable<Autocomplete[]> {
        this.spinnerService.show();
        return <Observable<Autocomplete[]>>this.httpClient.get(CONFIG.getUrl(CONFIG.endpoints.autocomplete + `?apikey=${CONFIG.APIKey.Weather}&q=${term}`)).pipe(
            map((res: Autocomplete) => {
                return res;
            }),
            catchError(err => {
                this.alertService.error(err.message)
                return throwError(err);
            }),
            finalize(() => {
                this.spinnerService.hide();
            })
        );
    }

    public forecasts(key: string): Observable<Forecasts> {
        this.spinnerService.show();
        return this.httpClient.get<Forecasts>(CONFIG.getUrl(CONFIG.endpoints.forecasts + `${key}?apikey=${CONFIG.APIKey.Weather}`)).pipe(
            catchError(err => {
                this.alertService.error(err.message)
                return throwError(err);
            }),
            finalize(() => {
                this.spinnerService.hide();
            })
        );
    }

}