import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from '../background-image/background-image.component';
import { BackgroundFilterComponent } from '../background-filter/background-filter.component';
import { PrimaryButtonComponent } from '../../buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';
import { Router } from '@angular/router';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { NavBarComponent } from '../../layout/nav-bar/nav-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="d-flex position-relative flex-column align-items-centter justify-content-end align-items-lg-start overflow-hidden pt-3 pb-0 px"
    >
      <background-filter />
      <background-image
        src="https://bmw.scene7.com/is/image/BMW/home-electric-promo:16to7?fmt=webp&wid=2560&hei=1120"
        alt="BMW cars"
      />
      <h3 class="subtitle">BMW 100% ELECTRIC CARS</h3>
      <h2>STARTING FROM</h2>
      <h2>R19 799/MONTH.*</h2>
      <button-wrapper class="button-wrapper mt-4">
        <primary-button [onClick]="navigateToSearchPage" class="me-sm-4">
          Search Available Cars
        </primary-button>
        <secondary-button [onClick]="navigateToMore"
          >Explore More</secondary-button
        >
      </button-wrapper>
    </header>
  `,
  styleUrls: ['./header.component.css'],
  imports: [
    CommonModule,
    BackgroundImageComponent,
    BackgroundFilterComponent,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    ButtonWrapperComponent,
    NavBarComponent,
  ],
})
export class HeaderComponent {
  searchLink = 'https://www.bmw.co.za/en/forms/BMW-BEV-Deeplink.html';
  exploreMoreLink =
    'https://www.bmw.co.za/en/topics/fascination-bmw/electromobility2020-new/electric-cars.html';

  constructor(private router: Router) {}

  navigateToSearchPage() {
    window.open(this.searchLink, '_blank');
  }

  navigateToMore() {
    window.open(this.exploreMoreLink, '_blank');
  }
}
