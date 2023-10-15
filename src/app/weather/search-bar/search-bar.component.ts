import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, debounceTime } from 'rxjs';
import { IndicatorService } from 'src/app/services/indicator.service';
import { weatherActions } from 'src/app/state/weather/weather.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {

  private debouncer: Subject<string> = new Subject();

  constructor(private store: Store, private indicator: IndicatorService) {
    // Debounce input to avoid unnecessary API calls
    this.debouncer.pipe(
      debounceTime(500)
    ).subscribe((value) => {
      this.getWeather(value);
    });
  }

  onKeyUp(city: string) {
    this.debouncer.next(city);
  }

  getWeather(city: string) {
    this.indicator.setTableIsLoading(true);
    this.store.dispatch(weatherActions.fetchByCityName({ city }));
  }
}
