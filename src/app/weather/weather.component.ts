import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { weatherActions } from '../state/weather/weather.actions';
import { selectWeather } from '../state/weather/weather.selectors';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { WeatherData } from '../interfaces/weather.interface';
import { catchError, delay, map, of, tap } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { IndicatorService } from '../services/indicator.service';
import { MatDialog } from '@angular/material/dialog';
import { EditRowPopupComponent } from './edit-row-popup/edit-row-popup.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements AfterViewInit {
  weatherData: MatTableDataSource<WeatherData> =
    new MatTableDataSource<WeatherData>([]);
  isLoading = true;
  displayedColumns: string[] = [
    'city',
    'country',
    'temp',
    'wind_kph',
    'humidity'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private store: Store,
    protected indicator: IndicatorService,
    private dialog: MatDialog
  ) {
    this.weatherData;
    this.store.dispatch(weatherActions.fetch());
  }

  ngAfterViewInit(): void {
    this.weatherData.paginator = this.paginator;
    this.weatherData.sort = this.sort;

    // Custom sortingDataAccessor for nested objects
    this.weatherData.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'city':
          return item.location.name;
        case 'country':
          return item.location.country;
        case 'temp':
          return item.current.temp_c;
        case 'wind_kph':
          return item.current.wind_kph;
        case 'humidity':
          return item.current.humidity;
        default:
          return item.custom_id;
      }
    };

    this.store
      .select(selectWeather)
      .pipe(
        delay(500),
        catchError((error) => {
          // TODO: Add error handling
          console.log(error);
          return of(null);
        }),
        map((weatherData) => {
          this.indicator.setTableIsLoading(false);
          if (weatherData === null) {
            return [];
          } else {
            return weatherData;
          }
        })
      )
      .subscribe((weatherData) => {
        this.weatherData.data = weatherData;
        this.weatherData.paginator = this.paginator;
        this.weatherData.sort = this.sort;
      });
  }

  onDoubleClick(row: WeatherData) {
    this.dialog.open(EditRowPopupComponent, {
      data: row,
      width: '400px',
    });
  }
}
