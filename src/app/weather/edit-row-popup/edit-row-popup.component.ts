import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { WeatherData } from 'src/app/interfaces/weather.interface';
import { weatherActions } from 'src/app/state/weather/weather.actions';

@Component({
  selector: 'app-edit-row-popup',
  templateUrl: './edit-row-popup.component.html',
  styleUrls: ['./edit-row-popup.component.scss'],
})
export class EditRowPopupComponent {
  form = this.formBuilder.group({
    city: [this.data.location.name, [Validators.required]],
    country: [this.data.location.country, [Validators.required]],
    temp: [this.data.current.temp_c, [Validators.required]],
    wind_kph: [this.data.current.wind_kph, [Validators.required]],
    humidity: [this.data.current.humidity, [Validators.required]],
    custom_id: [
      { value: this.data.custom_id, disabled: true },
      [Validators.required],
    ],
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: WeatherData,
    private formBuilder: FormBuilder,
    private store: Store
  ) {}

  updateRow() {
    this.store.dispatch(weatherActions.updateRow({
      custom_id: this.form.get('custom_id')!.value!,
      city: this.form.get('city')!.value!,
      country: this.form.get('country')!.value!,
      temp: this.form.get('temp')!.value!,
      wind_kph: this.form.get('wind_kph')!.value!,
      humidity: this.form.get('humidity')!.value!,
    }))
  }
}
