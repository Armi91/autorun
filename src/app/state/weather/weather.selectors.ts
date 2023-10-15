import { createFeatureSelector, createSelector } from "@ngrx/store";
import { WeatherState } from "./weather.state";

const featureSelector = createFeatureSelector<WeatherState>('weather');

export const selectWeather = createSelector(
  featureSelector,
  (state: WeatherState) => Object.values(state)
)

export const selectWeatherById = (id: string) => createSelector(
  featureSelector,
  (state: WeatherState) => state[id]
)

export const selectWeatherAsObject = createSelector(
  featureSelector,
  (state: WeatherState) => state
)