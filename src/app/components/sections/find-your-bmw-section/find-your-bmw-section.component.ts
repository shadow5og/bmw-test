import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericCardComponent } from '../../cards/generic-card/generic-card.component';

@Component({
  selector: 'find-your-bmw-section',
  standalone: true,
  templateUrl: './find-your-bmw-section.component.html',
  styleUrls: ['./find-your-bmw-section.component.css'],
  imports: [CommonModule, GenericCardComponent],
})
export class FindYourBmwSectionComponent {
  cards = [
    {
      subtitle: 'Find a New Car',
      alt: 'BMW Car icon',
      ctaText: 'Search Now',
      ctaLink: 'https://buy.bmw.co.za/',
      src: 'https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542',
    },
    {
      subtitle: 'Find a Used Car ',
      alt: 'BMW Car icon',
      ctaText: 'Search Now',
      ctaLink: 'https://bmwdigitalshowroom.co.za/',
      src: 'https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_USED_CAR?wid=1504&hei=542',
    },
    {
      subtitle: 'Build Your Own',
      alt: 'BMW Car icon',
      ctaText: 'Build & Price',
      ctaLink: 'https://www.bmw.co.za/en/configurator.html',
      src: 'https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_CON?wid=1504&hei=542',
    },
  ];
}
