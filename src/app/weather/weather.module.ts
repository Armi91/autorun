import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '../state/weather/weather.effects';
import { SharedModule } from '../shared/shared.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { EditRowPopupComponent } from './edit-row-popup/edit-row-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WeatherComponent,
    SearchBarComponent,
    EditRowPopupComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([WeatherEffects])
  ]
})
export class WeatherModule { }
