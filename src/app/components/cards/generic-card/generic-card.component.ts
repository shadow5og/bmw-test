import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';

@Component({
  selector: 'generic-card',
  standalone: true,
  template: `
    <div style="display: flex; flex-direction: column; align-items: center">
      <img [src]="src" [alt]="alt" style="max-width: 348px" />
      <h4>{{ subtitle }}</h4>
      <button-wrapper
        class="button-wrapper"
        style="width: 100%; display: flex; justify-content: center; margin-top: 0"
        ><secondary-button
          [onClick]="goToLink"
          style="border-color: black; color: black"
          >{{ ctaText }}</secondary-button
        ></button-wrapper
      >
    </div>
  `,
  styles: [
    `
      button-wrapper,
      button-wrapper secondary-button {
        width: 100%;
      }
    `,
  ],
  imports: [CommonModule, ButtonWrapperComponent, SecondaryButtonComponent],
})
export class GenericCardComponent implements OnInit {
  @Input() src =
    'https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542';
  @Input() alt = 'BMW Car icon';
  @Input() subtitle = 'Find a New Car';
  @Input() ctaText = 'Search Now';
  @Input() ctaLink = 'https://buy.bmw.co.za/';

  goToLink() {
    window.open(this.ctaLink ?? 'https://buy.bmw.co.za/', '_blank');
  }

  ngOnInit(): void {
    console.log(this.subtitle);
  }
}
