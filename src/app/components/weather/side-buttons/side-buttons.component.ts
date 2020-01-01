import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import { SettingService } from 'src/app/services/settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-side-buttons',
  templateUrl: './side-buttons.component.html',
  styleUrls: ['./side-buttons.component.css']
})
export class SideButtonsComponent implements OnInit, OnDestroy {

  public faLocationArrow = faLocationArrow;
  private isCelsiusSubscription: Subscription;
  public isCelsius: boolean;

  @Input() weatherKey: string;

  constructor(
    public settingService: SettingService
  ) { }

  ngOnInit(): void {
    this.isCelsiusSubscription = this.settingService.unitCelsiuState.subscribe(res => {
      this.isCelsius = res;
    });
  }

  toggleLocation(): void {
    this.settingService.setLocation();
  }

  toggleUnit(): void {
    this.settingService.changeUnitTemperature();
  }

  ngOnDestroy(): void {
    this.isCelsiusSubscription.unsubscribe();
  }

}
