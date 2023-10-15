import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridItemComponent } from './grid-item/grid-item.component';
import { GridRoutingModule } from './grid-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    GridListComponent,
    GridItemComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule,
    SharedModule
  ]
})
export class GridModule { }
