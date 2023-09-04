import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../../icons/person/person.component';
import { SearchComponent } from '../../icons/search/search.component';
import { CartComponent } from '../../icons/cart/cart.component';
import { LocationComponent } from '../../icons/location/location.component';

type Link =
  | {
      name: string;
      href: string;
      data?: undefined;
    }
  | {
      name: string;
      data: never[];
      href?: undefined;
    };

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    NgbNavModule,
    CommonModule,
    PersonComponent,
    SearchComponent,
    CartComponent,
    LocationComponent,
  ],
})
export class NavBarComponent implements OnInit {
  active = 0;
  activeId = 'active';

  links: Link[] = [
    { name: 'Models', href: 'https://www.bmw.co.za/en/all-models.html' },
    { name: 'Electric', data: [] },
    {
      name: 'Build & Price',
      href: 'https://www.bmw.co.za/en/configurator.html',
    },
    {
      name: 'Browse & Buy Online',
      data: [],
    },
    {
      name: 'More BMW',
      data: [],
    },
  ];
  closeResult: string = '';

  constructor(private offcanvasService: NgbOffcanvas) {}

  openTop(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'top' });
  }

  ngOnInit() {
    console.log(this.links);
  }
}
