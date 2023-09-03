import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';
import { ButtonWrapperComponent } from '../../containers/button-wrapper/button-wrapper.component';
import { SideBySideContentComponent } from '../../cards/side-by-side-content/side-by-side-content.component';

@Component({
  selector: 'cta-with-copy-section',
  standalone: true,
  templateUrl: './cta-with-copy-section.component.html',
  styles: [``],
  imports: [
    CommonModule,
    SecondaryButtonComponent,
    ButtonWrapperComponent,
    SideBySideContentComponent,
  ],
})
export class CtaWithCopySectionComponent {}
