import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'background-filter',
  standalone: true,
  imports: [CommonModule],
  template: `<div
    [ngClass]="isTopFilter ? 'backgound-filter' : 'horizontal-backgound-filter'"
  ></div>`,
  styles: [
    `
      .horizontal-backgound-filter {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: -1;
        background-image: linear-gradient(
          to right,
          var(--opaque-antricite) 10%,
          transparent 30%
        );
      }
    `,
  ],
})
export class BackgroundFilterComponent {
  @Input() isTopFilter = true;
}
