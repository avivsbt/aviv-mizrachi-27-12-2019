import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { CONFIG } from '../core/config'
import { Weather } from '../models/weather.model';
import { Observable } from 'rxjs';
import { Result } from '../models/result.model';

@Injectable({ providedIn: 'root' })

export class WeatherService {

    constructor(private httpClient: HttpClient) { }

    public index(): Observable<Weather[]> {
        return this.httpClient.get<Result<Weather[]>>(CONFIG.getUrl(CONFIG.endpoints.search)).pipe(
            map(res => {
                return res.data
            })
        );
    }
}