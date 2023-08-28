import { Component, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../components/buttons/secondary-button/secondary-button.component';
import { HeaderComponent } from '../components/generic/header/header.component';
import { ButtonWrapperComponent } from '../components/containers/button-wrapper/button-wrapper.component';
import { GenericCardComponent } from '../components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { FindYourBmwSectionComponent } from '../components/sections/find-your-bmw-section/find-your-bmw-section.component';
import { BackgroundImageComponent } from '../components/generic/background-image/background-image.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-header />
    <find-your-bmw-section />
    <section
      class="px"
      style="height: 510px; widith: 100vw; position: relative"
    >
      <background-image
        src="https://bmw.scene7.com/is/image/BMW/ix1-4000x3000:3to1?fmt=webp&wid=2560&hei=853"
        alt="BMW cars"
      />
    </section>
  `,
  styles: [``],
  imports: [
    CommonModule,
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeaderComponent,
    ButtonWrapperComponent,
    GenericCardComponent,
    FindYourBmwSectionComponent,
    BackgroundImageComponent,
  ],
})
export default class HomeComponent implements OnInit {
  count = 0;

  increment() {
    this.count++;
  }
  popUp() {
    alert("I'm Here.");
  }

  ngOnInit(): void {}
}
