import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridModule } from './grid/grid.module';
import { WeatherModule } from './weather/weather.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/grid',
    pathMatch: 'full',
  },
  {
    path: 'grid',
    loadChildren: () => GridModule,
  },
  {
    path: 'weather',
    loadChildren: () => WeatherModule,
  },
  {
    path: '**',
    redirectTo: 'grid',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
