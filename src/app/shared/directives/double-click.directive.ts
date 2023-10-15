import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appDoubleClick]'
})
export class DoubleClickDirective {

  @Output() appDoubleClick = new EventEmitter();
  private clicks = 0;

  @HostListener('click')
  onClick() {
    this.clicks++;
    if (this.clicks === 2) {
      this.clicks = 0;
      this.appDoubleClick.emit();
    } else {
      setTimeout(() => {
        this.clicks = 0;
      }, 250);
    }
  }

}
