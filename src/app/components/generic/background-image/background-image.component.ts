import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'background-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="background-image">
      <img *ngIf="!isVideo" [src]="src" [alt]="alt" />
      <video
        *ngIf="isVideo"
        class="home-hero-video"
        [poster]="poster"
        playsinline="playsinline"
        autoplay="autoplay"
        muted="muted"
        loop="loop"
        title="Video"
      >
        <source [src]="src" type="video/mp4" />
      </video>
    </div>
  `,
  styles: [
    `
      div img {
        filter: brightness(0.75);
      }
    `,
  ],
})
export class BackgroundImageComponent {
  @Input() src: string =
    'https://bmwexcellenceclub.co.za/assets/general/bmw-header-1-1.mp4';
  @Input() alt: string = '';
  @Input() isVideo: boolean = false;
  @Input() poster =
    'https://bmwexcellenceclub.co.za/assets/general/Screenshot-2023-06-23-at-10.07.27.webp';
}
