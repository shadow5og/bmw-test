import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'button-wrapper',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <ng-content />
    </div>
  `,
  styles: [
    `
      div {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
        /* width: 100%; */
      }

      @media (min-width: 640px) {
        div {
          flex-direction: row;
          align-items: center;
          justify-content: center;
          /* width: max-content; */
        }
      }

      @media (min-width: 1024px) {
        div {
          justify-content: start;
          margin-top: 50px;
        }
      }
    `,
  ],
})
export class ButtonWrapperComponent {}
