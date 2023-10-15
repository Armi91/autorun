import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { locationsGenerator } from '../helpers';
import { BulkWeatherData } from '../interfaces/weather.interface';
import { map } from 'rxjs';
import { WeatherState } from '../state/weather/weather.state';

const CURRENT_WEATHER_URL = 'https://api.weatherapi.com/v1/current.json';
const API_KEY = '0e679ab146ee4508a4b145223231310'; // Should be on the backend
const CURRENT_WEATHER_BULK_URL = `${CURRENT_WEATHER_URL}?key=${API_KEY}&q=bulk`;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  fetchBulkWeatherData(city?: string) {
    const locations = locationsGenerator(city);
    return this.http
      .post<BulkWeatherData>(CURRENT_WEATHER_BULK_URL, {
        locations,
      })
      .pipe(
        map((response) => {
          // Converting response to object with custom_id as key to return as state
          const weatherData: WeatherState = {};

          // Filtering out invalid queries. While searching by city name, if the city name is invalid, the API returns success, but without location and current objects
          const validQueries = response.bulk.filter(
            (item) => item.query.location && item.query.current
          );
          validQueries.forEach((item) => {
            weatherData[item.query.custom_id] = item.query;
          });

          return weatherData;
        })
      );
  }
}
