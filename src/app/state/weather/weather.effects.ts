import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ApiService } from 'src/app/services/api.service';
import { weatherActions } from './weather.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';

@Injectable()
export class WeatherEffects {
  $fetchWeatherData = createEffect(() =>
    this.actions$.pipe(
      ofType(weatherActions.fetch, weatherActions.fetchByCityName),
      switchMap((action) => {
        if (action.type === weatherActions.fetch.type) { // Check if the action is fetch or fetchByCityName
          return this.apiService.fetchBulkWeatherData();
        } else { // If fetchByCityName, then it has city payload
          return this.apiService.fetchBulkWeatherData(action.city);
        }
      }),
      map((weather) => weatherActions.fetchSuccess({ weather })),
      catchError((error) => of(weatherActions.fetchError({ error })))
    )
  );

  constructor(private actions$: Actions, private apiService: ApiService) {}
}
