import { Component, Input, OnInit } from '@angular/core';
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
export class PrimaryButtonComponent implements OnInit {
  @Input() onClick?: () => void;
  @Input() styling?: {
    [klass: string]: any;
  };
  @Input() style: string = '';

  handleClick() {
    if (this.onClick) this?.onClick();
  }

  ngOnInit(): void {
    console.log(this.styling);
  }
}
