import { createReducer, on } from '@ngrx/store';
import { initialWeatherState } from './weather.state';
import { weatherActions } from './weather.actions';

export const weatherReducer = createReducer(
  initialWeatherState,
  on(weatherActions.fetch, (state) => ({ ...state })),
  on(weatherActions.fetchSuccess, (state, { weather }) => ({ ...weather })),
  on(weatherActions.fetchByCityName, (state) => ({ ...state })),
  on(weatherActions.fetchByCityNameSuccess, (state, { weather }) => ({
    ...weather,
  })),
  on(
    weatherActions.updateRow,
    (state, { custom_id, city, country, temp, wind_kph, humidity }) => {
      return {
        ...state,
        [custom_id]: {
          ...state[custom_id],
          location: {
            ...state[custom_id].location,
            name: city,
            country: country,
          },
          current: {
            ...state[custom_id].current,
            temp_c: temp,
            wind_kph: wind_kph,
            humidity: humidity,
          },
        },
      }
    }
  )
);
