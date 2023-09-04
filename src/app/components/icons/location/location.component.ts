import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'location-icon',
  standalone: true,
  imports: [CommonModule],
  template: `<i class="bi bi-geo-alt"></i>`,
  styles: [''],
})
export class LocationComponent {}
