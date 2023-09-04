import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'person-icon',
  standalone: true,
  imports: [CommonModule],
  template: ` <i class="bi bi-person"></i> `,
  styles: [''],
})
export class PersonComponent {}
