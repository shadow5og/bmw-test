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
import { ExploreButtonsComponent } from '../components/buttons/explore-buttons/explore-buttons.component';
import { NewBmwSectionComponent } from '../components/sections/new-bmw-section/new-bmw-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <app-header />
    <find-your-bmw-section />
    <new-bmw-section />
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
    ExploreButtonsComponent,
    NewBmwSectionComponent,
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
