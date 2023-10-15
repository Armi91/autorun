import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridListComponent } from './grid-list/grid-list.component';
import { GridItemComponent } from './grid-item/grid-item.component';

const routes: Routes = [
  {
    path: '',
    component: GridListComponent,
  },
  {
    path: ':id',
    component: GridItemComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridRoutingModule {}
