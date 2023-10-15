import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { WeatherState } from './weather.state';

export const weatherActions = createActionGroup({
  source: '[Weather]',
  events: {
    Fetch: emptyProps(),
    'Fetch Success': props<{ weather: WeatherState }>(),
    'Fetch Error': props<{ error: any }>(),
    'Fetch By City Name': props<{ city: string }>(),
    'Fetch By City Name Success': props<{ weather: WeatherState }>(),
    'Fetch By City Name Error': props<{ error: any }>(),
    'Update Row': props<{
      custom_id: string;
      city: string;
      country: string;
      temp: number;
      wind_kph: number;
      humidity: number;
    }>(),
  },
});
