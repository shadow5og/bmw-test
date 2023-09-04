import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from '../../generic/background-image/background-image.component';
import { ExploreButtonsComponent } from '../../buttons/explore-buttons/explore-buttons.component';

@Component({
  selector: 'new-bmw-section',
  standalone: true,
  templateUrl: './new-bmw-section.component.html',
  styles: [``],
  imports: [CommonModule, BackgroundImageComponent, ExploreButtonsComponent],
})
export class NewBmwSectionComponent {}
