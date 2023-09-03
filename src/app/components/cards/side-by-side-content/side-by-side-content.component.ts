import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondaryButtonComponent } from '../../buttons/secondary-button/secondary-button.component';

@Component({
  selector: 'side-by-side-content',
  standalone: true,
  templateUrl: 'side-by-side-content.component.html',
  styleUrls: ['./side-by-side-content.component.css'],
  imports: [CommonModule, SecondaryButtonComponent],
})
export class SideBySideContentComponent {
  @Input() heading = 'BMW ACCESSORIES';
  @Input() subtitle = 'BMW TABLET HOLDER PRO.';
  @Input() copy =
    'The universal holder is adjustable in terms of size and is attached to the separately available basic carrier or to the optional equipment "Travel & Comfort". It provides a secure hold for a wide range of Apple or Samsung tablets with Travel & Comfort safety case from 7" to 11". It can be rotated by 360° and locked in any desired inclination.';
  @Input() cta = 'Learn more';
  @Input() ctaLink = 'https://www.bmw.co.za/en/forms/BMW-iX1-deeplink.html';
  @Input() src =
    'https://bmw.scene7.com/is/image/BMW/iPad_Holder_Fitted:16to9?fmt=webp&amp;wid=2560&amp;hei=1434';
  @Input() alt = '';
  @Input() isImage = false;

  onClick() {
    window.open(this.ctaLink, '_blank');
  }
}
