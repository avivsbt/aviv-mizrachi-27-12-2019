import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { SettingService } from 'src/app/services/settings.service';
import { Temperature } from 'src/app/models/current-conditions.model';

@Component({
    selector: 'app-temperature',
    templateUrl: './temperature.component.html',
    styleUrls: ['./temperature.component.css']
})

export class TemperatureComponent implements OnInit, OnDestroy {

    private isCelsiusSubscription: Subscription;
    public isCelsius: boolean;

    @Input() temperature: Temperature;
    
    constructor(
        public settingService: SettingService,
    ) { 
        this.settingService.setUnitTemperature();
    }

    ngOnInit() {
        this.isCelsiusSubscription = this.settingService.unitCelsiuState.subscribe(res => {
            this.isCelsius = res;
        });
    }

    ngOnDestroy(): void {
        this.isCelsiusSubscription.unsubscribe();
    }

}
