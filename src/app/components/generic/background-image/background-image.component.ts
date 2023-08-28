import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'background-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background-image">
      <img [src]="src" [alt]="alt" />
    </div>
  `,
  styles: [
    `
      div img {
        filter: brightness(0.75);
      }
    `,
  ],
})
export class BackgroundImageComponent {
  @Input() src: string = '';
  @Input() alt: string = '';
}
