import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicatorService {

  // Elevated here to be able to use it in different components
  public tableIsLoading$ = new BehaviorSubject<boolean>(true);

  constructor() { }

  setTableIsLoading(isLoading: boolean) {
    this.tableIsLoading$.next(isLoading);
  }
}
