import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerState } from './spinner.models';

@Injectable({ providedIn: 'root' })

export class SpinnerService {

  private spinnerSubject = new Subject<SpinnerState>();
  spinnerState = this.spinnerSubject.asObservable();

  constructor() { }

  show() {
    this.spinnerSubject.next(<SpinnerState>{ show: true });
  }

  hide() {
    this.spinnerSubject.next(<SpinnerState>{ show: false });
  }

}

