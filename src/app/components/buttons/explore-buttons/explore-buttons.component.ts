import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { SecondaryButtonComponent } from '../secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from '../primary-button/primary-button.component';

@Component({
  selector: 'explore-buttons',
  standalone: true,
  template: `
    <button-wrapper class="button-wrapper">
      <primary-button [onClick]="navigateToSearchPage" class="me-sm-4">
        Search Available Cars
      </primary-button>
      <secondary-button [onClick]="navigateToMore"
        >Explore More</secondary-button
      >
    </button-wrapper>
  `,
  styles: [``],
  imports: [
    CommonModule,
    ButtonWrapperComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
  ],
})
export class ExploreButtonsComponent {
  navigateToSearchPage() {
    window.open(
      'https://www.bmw.co.za/en/forms/BMW-BEV-Deeplink.html',
      '_blank'
    );
  }

  navigateToMore() {
    window.open(
      'https://www.bmw.co.za/en/topics/fascination-bmw/electromobility2020-new/electric-cars.html',
      '_blank'
    );
  }
}
