import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from '../../generic/background-image/background-image.component';
import { ExploreButtonsComponent } from '../../buttons/explore-buttons/explore-buttons.component';

@Component({
  selector: 'new-bmw-section',
  standalone: true,
  template: `
    <section
      class="d-flex position-relative flex-column align-items-centter justify-content-end align-items-lg-start overflow-hidden py-3 pb-0 px w-100"
      style="height: 510px;;"
    >
      <background-image
        src="https://bmw.scene7.com/is/image/BMW/ix1-4000x3000:3to1?fmt=webp&wid=2560&hei=853"
        alt="BMW cars"
      />
      <h3 class="subtitle">the new</h3>
      <h2 class="headline">iX1</h2>
      <h4 class="bigger-subtitle text-white">
        The first ever fully-electric BMW iX1.
      </h4>
      <explore-buttons class="mb-5" />
    </section>
  `,
  styles: [``],
  imports: [CommonModule, BackgroundImageComponent, ExploreButtonsComponent],
})
export class NewBmwSectionComponent {}
