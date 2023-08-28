import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'genreric-card',
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
  styleUrls: ['./genreric-card.component.css'],
  imports: [CommonModule, ButtonWrapperComponent, SecondaryButtonComponent],
})
export class GenrericCardComponent {
  @Input() src =
    'https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542';
  @Input() alt = 'BMW Car icon';
  @Input() subtitle = 'Find a New Car';
  @Input() ctaText = 'Search Now';
  @Input() ctaLink = 'https://buy.bmw.co.za/';

  constructor(private router: Router) {}

  goToLink() {
    window.location.href = this.ctaLink;
    // this.router.navigateByUrl(this.ctaLink);
  }
}
