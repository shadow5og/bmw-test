import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';

@Component({
  selector: 'generic-card',
  standalone: true,
  template: `
    <div class="d-flex flex-column align-items-center">
      <img [src]="src" [alt]="alt" style="max-width: 348px" />
      <h4>{{ subtitle }}</h4>
      <secondary-button
        [onClick]="goToLink"
        style="border-color: black; color: black"
        class="w-100 px-3 w-auto"
        >{{ ctaText }}</secondary-button
      >
    </div>
  `,
  styles: [``],
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
