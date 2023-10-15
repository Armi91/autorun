import { WeatherData } from "src/app/interfaces/weather.interface"

export interface WeatherState {
  [id: string]: WeatherData
}

export const initialWeatherState: WeatherState = {};