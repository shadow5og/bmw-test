import { Component } from '@angular/core';
import { PrimaryButtonComponent } from '../components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../components/buttons/secondary-button/secondary-button.component';
import { HeaderComponent } from '../components/generic/header/header.component';
import { ButtonWrapperComponent } from '../components/containers/button-wrapper/button-wrapper.component';
import { GenrericCardComponent } from '../components/cards/genreric-card/genreric-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-header />

    <section style="padding-top: 2rem" class="px">
      <h3>Shopping tools</h3>
      <h2 style="padding-left: 20%; padding-right: 20%">Find Your BMW.</h2>
      <div class="" style="display: flex; flex-direction: column">
        <genreric-card />
        <div
          style="display: flex; flex-direction: column; align-items: center;"
        >
          <img
            src="https://bmw.scene7.com/is/image/BMW/NxW_Home_ICON_STOCK_CAR?wid=1504&hei=542"
            alt="BMW Car icon"
            style="max-width: 348px;"
          />
          <h4>Find a New Car</h4>
          <button-wrapper
            class="button-wrapper"
            style="width: 100%; display:flex; justify-content: center"
            ><secondary-button style="border-color: black; color: black;"
              >Search Now</secondary-button
            ></button-wrapper
          >
        </div>
      </div>
    </section>

    <primary-button>Click me again and again and again</primary-button>

    <secondary-button [onClick]="popUp" [styling]="{ 'width.px': '100%' }"
      >Go for it</secondary-button
    >

    <p class="read-the-docs">
      For guides on how to customize this project, visit the
      <a href="https://analogjs.org" target="_blank">Analog documentation</a>
    </p>
  `,
  styles: [``],
  imports: [
    PrimaryButtonComponent,
    SecondaryButtonComponent,
    HeaderComponent,
    ButtonWrapperComponent,
    GenrericCardComponent,
  ],
})
export default class HomeComponent {
  count = 0;

  increment() {
    this.count++;
  }
  popUp() {
    alert("I'm Here.");
  }
}
