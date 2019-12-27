import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpinnerState, SpinnerService } from './spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html',
    styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnDestroy, OnInit {

    public visible = false;
    public  priority = 0;

    private spinnerStateChanged: Subscription;

    constructor(
        private spinnerService: SpinnerService
    ) {}

    ngOnInit() {
        this.spinnerStateChanged = this.spinnerService.spinnerState
            .subscribe((state: SpinnerState) => {
                if (!state.show && state.priority >= this.priority) {
                    this.visible = false;
                    this.priority = 0;
                } else if (state.show) {
                    this.visible = true;
                    this.priority = state.priority > this.priority ? state.priority : this.priority;
                }
            });
    }

    ngOnDestroy() {
        this.spinnerStateChanged.unsubscribe();
    }

}
