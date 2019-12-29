import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingService } from './services/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {

  private locationSubscription: Subscription;
  private unitSubscription: Subscription;

  constructor(
    private settingService: SettingService
  ) {

  }

  ngOnInit() {
    this.locationSubscription = this.settingService.locationState.subscribe(loc => {
      console.log(loc)
    });
    this.unitSubscription = this.settingService.unitCelsiusState.subscribe(unit => {
      console.log(unit)
    });    
  }

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
    this.unitSubscription.unsubscribe();
  }

}
