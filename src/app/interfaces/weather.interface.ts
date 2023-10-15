export interface LocationData {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

export interface CurrentWeather {
  last_updated_epoch: number;
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
  wind_kph: number;
  wind_dir: string;
  humidity: number;
}

export interface WeatherData {
  custom_id: string;
  q: string;
  location: LocationData;
  current: CurrentWeather;
}

export interface BulkWeatherData {
  bulk: Array<{query: WeatherData}>
}