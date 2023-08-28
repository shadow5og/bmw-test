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
  templateUrl: './header.component.html',
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
    window.location.href = this.searchLink;
  }

  navigateToMore() {
    window.location.href = this.exploreMoreLink;
  }
}
