import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from '../../generic/background-image/background-image.component';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';
import { BackgroundFilterComponent } from '../../generic/background-filter/background-filter.component';

@Component({
  selector: 'video-cta-section',
  standalone: true,
  template: `
    <section
      class="position-relative mb-3 d-flex w-100 flex-column align-items-center align-items-lg-start justify-content-center px overflow-hidden"
    >
      <background-image [isVideo]="true" />
      <background-filter [isTopFilter]="false" />
      <h3 class="text-white">
        A LUXURY CLASS VEHICLE WITH A LIFESTYLE TO MATCH
      </h3>
      <h2 class="text-white" style="text-transform: none;">
        BMW Excellence Club
      </h2>
      <h4 class="bigger-subtitle text-white text-lg-start">
        Experience being part of a complimentary members club exclusively for
        BMW luxury class owners.
      </h4>
      <button-wrapper
        ><secondary-button>Learn more</secondary-button></button-wrapper
      >
    </section>
  `,
  styles: [
    `
      section {
        height: 100dvh !important;
      }

      @media screen and (min-width: 768px) {
        section {
          height: 499px !important;
        }
      }

      @media screen and (min-width: 992px) {
        section {
          height: 453px !important;
          padding-top: 8%;
        }
      }

      @media screen and (min-width: 1200px) {
        section {
          height: 532px !important;
        }
      }

      @media screen and (min-width: 1400px) {
        section {
          height: 614px !important;
        }
      }

      @media screen and (min-width: 1920px) {
        section {
          height: 840px !important;
        }
      }
    `,
  ],
  imports: [
    CommonModule,
    BackgroundImageComponent,
    ButtonWrapperComponent,
    SecondaryButtonComponent,
    BackgroundFilterComponent,
  ],
})
export class VideoCtaSectionComponent {}
