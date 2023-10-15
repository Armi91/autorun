import { Component } from '@angular/core';
import { GridItem, gridItems } from '../gridItems';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent {

  gridItems: GridItem[] = gridItems;

}
