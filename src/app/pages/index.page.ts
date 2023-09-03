import { Component, OnInit } from '@angular/core';
import { PrimaryButtonComponent } from '../components/buttons/primary-button/primary-button.component';
import { SecondaryButtonComponent } from '../components/buttons/secondary-button/secondary-button.component';
import { HeaderComponent } from '../components/generic/header/header.component';
import { ButtonWrapperComponent } from '../components/containers/button-wrapper/button-wrapper.component';
import { GenericCardComponent } from '../components/cards/generic-card/generic-card.component';
import { CommonModule } from '@angular/common';
import { FindYourBmwSectionComponent } from '../components/sections/find-your-bmw-section/find-your-bmw-section.component';
import { BackgroundImageComponent } from '../components/generic/background-image/background-image.component';
import {
  NgbDatepickerModule,
  NgbOffcanvas,
  OffcanvasDismissReasons,
} from '@ng-bootstrap/ng-bootstrap';

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

    <ng-template #content let-offcanvas>
      <div class="offcanvas-header">
        <h4 class="offcanvas-title" id="offcanvas-basic-title">
          Profile update
        </h4>
        <button
          type="button"
          class="btn-close"
          aria-label="Close"
          (click)="offcanvas.dismiss('Cross click')"
        ></button>
      </div>
      <div class="offcanvas-body">
        <form>
          <div class="mb-3">
            <label for="dateOfBirth">Date of birth</label>
            <div class="input-group">
              <input
                id="dateOfBirth"
                class="form-control"
                placeholder="yyyy-mm-dd"
                name="dp"
                ngbDatepicker
                #dp="ngbDatepicker"
              />
              <button
                class="btn btn-outline-secondary bi bi-calendar3"
                (click)="dp.toggle()"
                type="button"
              ></button>
            </div>
          </div>
        </form>
        <div class="text-end">
          <button
            type="button"
            class="btn btn-outline-dark"
            (click)="offcanvas.close('Save click')"
          >
            Save
          </button>
        </div>
      </div>
    </ng-template>

    <button class="btn btn-lg btn-outline-primary" (click)="open(content)">
      Launch demo offcanvas
    </button>

    <hr />

    <pre>{{ closeResult }}</pre>
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
    NgbDatepickerModule,
  ],
})
export default class HomeComponent implements OnInit {
  count = 0;
  closeResult = '';

  constructor(private offcanvasService: NgbOffcanvas) {}

  open(content: any) {
    this.offcanvasService
      .open(content, { ariaLabelledBy: 'offcanvas-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === OffcanvasDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on the backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  increment() {
    this.count++;
  }
  popUp() {
    alert("I'm Here.");
  }

  ngOnInit(): void {}
}
