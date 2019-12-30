import { Component, OnInit } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { SettingService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.css']
})
export class SideButtonsComponent implements OnInit {

  public faLocationArrow = faLocationArrow;

  constructor(
    public settingService: SettingService
  ) { }

  ngOnInit() {

  }

  toggleLocation() {
    this.settingService.setLocation();
  }

  toggleUnit() {
    this.settingService.changeUnitTemperature();
  }

}
