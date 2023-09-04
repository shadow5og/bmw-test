import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cart-icon',
  standalone: true,
  imports: [CommonModule],
  template: ` <i class="bi bi-cart2"></i>`,
  styles: [''],
})
export class CartComponent {}
