import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="d-flex flex-column justify-content-center align-items-stretch flex-sm-row align-items-sm-center justify-content-lg-start mt-lg-[50px]"
    >
      <ng-content />
    </div>
  `,
  styles: [``],
})
export class ButtonWrapperComponent {}
