import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';

export interface SpinnerState {
  show: boolean;
  priority: number;
}

@Injectable()

export class SpinnerService {

  private spinnerSubject = new Subject<SpinnerState>();
  spinnerState = this.spinnerSubject.asObservable();

  constructor( @Optional() @SkipSelf() prior: SpinnerService) {
    if (prior) { return prior; }
  }

  show(priority: number = 0) {
    this.spinnerSubject.next(<SpinnerState>{ show: true, priority: priority });
  }

  hide(priority: number = 0) {
    this.spinnerSubject.next(<SpinnerState>{ show: false, priority: priority });
  }

}
