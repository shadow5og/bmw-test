import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav-bar />
    <router-outlet></router-outlet>
    <app-footer />
  `,
  styles: [
    `
      :host {
        /* max-width: 1280px; */
        margin: 0 auto;
        /* padding: 2rem; */
        text-align: center;
      }
    `,
  ],
  imports: [RouterOutlet, NavBarComponent, FooterComponent, NgbAccordionModule],
})
export class AppComponent {}
