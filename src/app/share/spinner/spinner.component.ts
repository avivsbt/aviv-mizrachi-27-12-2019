import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { SpinnerState } from './spinner.models';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})

export class SpinnerComponent implements OnDestroy, OnInit {

    public visible = false;

    private spinnerStateChanged: Subscription;

    constructor(
        private spinnerService: SpinnerService
    ) { }

    ngOnInit() {
        this.spinnerStateChanged = this.spinnerService.spinnerState.subscribe((state: SpinnerState) => {
            if (!state.show) {
                this.visible = false;
            } else if (state.show) {
                this.visible = true;
            }
        });
    }

    ngOnDestroy() {
        this.spinnerStateChanged.unsubscribe();
    }

}
