import { Component, OnInit } from '@angular/core';
import { SettingService } from './services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private settingService: SettingService
  ) {

  }

  ngOnInit() {
    this.settingService.locationState.subscribe(loc => {
      console.log(loc)
    });
  }

}
