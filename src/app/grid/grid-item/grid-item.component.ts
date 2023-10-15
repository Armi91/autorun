import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridItem, gridItems } from '../gridItems';

@Component({
  selector: 'app-grid-item',
  templateUrl: './grid-item.component.html',
  styleUrls: ['./grid-item.component.scss']
})
export class GridItemComponent {

  public gridItem: GridItem | undefined;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.gridItem = gridItems.find(item => item.id === params['id']);
    });
  }
}
