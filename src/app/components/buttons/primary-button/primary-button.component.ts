import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'primary-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="custom-button"
      [ngStyle]="styling"
      [style]="style"
      (click)="handleClick()"
    >
      <ng-content />
    </button>
  `,
  styles: [
    `
      /* width: 100%; */
    `,
  ],
})
export class PrimaryButtonComponent {
  @Input() onClick?: (() => void) | string;
  @Input() styling?: {
    [klass: string]: any;
  };
  @Input() style: string = '';

  handleClick() {
    if (typeof this?.onClick !== 'string') {
      const onClickFunction = this.onClick as () => void;
      onClickFunction();
    } else window.open(this.onClick, '_blank');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['onClick']) {
  //     this.onClick = changes['onClick'].currentValue;
  //   }
  // }
}
