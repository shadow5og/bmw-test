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
    ExploreButtonsComponent,
  ],
})
export class HeaderComponent {}
