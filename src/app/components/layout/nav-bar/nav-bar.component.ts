import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
} from '@angular/core';
import { NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

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
  imports: [NgbNavModule, CommonModule],
  encapsulation: ViewEncapsulation.None,
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
