import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/layout/nav-bar/nav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <nav-bar />
    <router-outlet></router-outlet>
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
  imports: [RouterOutlet, NavBarComponent],
})
export class AppComponent {}
