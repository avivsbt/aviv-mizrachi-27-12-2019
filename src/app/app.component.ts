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

  constructor(
    private settingService: SettingService
  ) {

  }

  ngOnInit() {
    this.locationSubscription = this.settingService.locationState.subscribe(loc => {
      console.log(loc)
    });
  }

  ngOnDestroy() {
    this.locationSubscription.unsubscribe();
  }

}
