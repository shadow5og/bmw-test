import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from '../background-image/background-image.component';
import { BackgroundFilterComponent } from '../background-filter/background-filter.component';
import { PrimaryButtonComponent } from '../../buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { NavBarComponent } from '../../layout/nav-bar/nav-bar.component';
import { ExploreButtonsComponent } from '../../buttons/explore-buttons/explore-buttons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header
      class="d-flex position-relative flex-column align-items-centter justify-content-end align-items-lg-start overflow-hidden pt-3 pb-0 px"
    >
      <background-filter />
      <background-filter [isTopFilter]="false" class="d-none d-xl-block" />
      <background-image
        src="https://bmw.scene7.com/is/image/BMW/home-electric-promo:16to7?fmt=webp&wid=2560&hei=1120"
        alt="BMW cars"
      />
      <h3 class="subtitle">BMW 100% ELECTRIC CARS</h3>
      <h2>STARTING FROM</h2>
      <h2>R19 799/MONTH.*</h2>
      <explore-buttons class="mt-3 mt-md-4 mt-lg-5" />
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
    ExploreButtonsComponent,
  ],
})
export class HeaderComponent {}
