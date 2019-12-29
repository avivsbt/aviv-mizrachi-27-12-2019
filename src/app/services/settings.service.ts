import { Injectable } from '@angular/core';
import { Location } from '../models/location.model';
import { CONFIG } from '../share/config';
import { Subject } from 'rxjs';
import * as Moment from 'moment';
import { StorageService } from '../services/local-storage.service';

@Injectable({ providedIn: 'root' })

export class SettingService {

    private crrLocation: Location;
    locationSubject = new Subject<Location>();
    locationState = this.locationSubject.asObservable();    

    private UnitCelsius: boolean = this.storageService.get<boolean>('UnitCelsius');
    unitCelsiuSubject = new Subject<boolean>();
    unitCelsiusState = this.unitCelsiuSubject.asObservable();   

    constructor(
        private storageService: StorageService
    ) {
        this.setLocation();
        this.setUnitTemperature();
    }

    setLocation() {
        navigator.geolocation.getCurrentPosition((pos) => {
            this.crrLocation = new Location(pos.coords.latitude, pos.coords.longitude);
            this.locationSubject.next(this.crrLocation);
        }, () => {
            this.crrLocation = CONFIG.defaultLocation;
            this.locationSubject.next(this.crrLocation);
        });
    }

    setUnitTemperature(){
        if(!this.storageService.get<boolean>('UnitCelsius')){
            this.UnitCelsius = false;
            this.storageService.set('UnitCelsius', this.UnitCelsius, Moment().add(30, 'days').toDate());
        }
        this.unitCelsiuSubject.next(this.UnitCelsius);
    }

    changeUnitTemperature(){
        this.UnitCelsius = !this.UnitCelsius;
        this.storageService.set('UnitCelsius', this.UnitCelsius, Moment().add(30, 'days').toDate());
        this.unitCelsiuSubject.next(this.UnitCelsius);
    }



}