import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'secondary-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      class="custom-button secondary-ci-button"
      [ngStyle]="styling"
      (click)="handleClick()"
      [style]="style"
    >
      <ng-content />
    </button>
  `,
  styles: [``],
})
export class SecondaryButtonComponent extends PrimaryButtonComponent {}
