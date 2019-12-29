import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { CONFIG } from '../share/config';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class SettingService {

    private crrLocation: Location;
    locationSubject = new Subject<Location>();
    locationState = this.locationSubject.asObservable();    

    constructor() {
        console.log('SettingService')
    }

    setLocation() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.crrLocation = new Location(pos.coords.latitude, pos.coords.longitude);
            this.locationSubject.next(this.crrLocation);
        }, () => {
            this.crrLocation = CONFIG.defaultLocation;
        });
    }



}