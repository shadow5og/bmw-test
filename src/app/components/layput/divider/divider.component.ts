import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'divider',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="bg-white" style="height: 40px"></div> `,
  styles: [``],
})
export class DividerComponent {}
