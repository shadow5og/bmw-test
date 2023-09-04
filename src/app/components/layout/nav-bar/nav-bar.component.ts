import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation,
  AfterViewInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { NgbNavModule, NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PersonComponent } from '../../icons/person/person.component';
import { SearchComponent } from '../../icons/search/search.component';
import { CartComponent } from '../../icons/cart/cart.component';
import { LocationComponent } from '../../icons/location/location.component';
import { Subscription } from 'rxjs';

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
export class NavBarComponent implements OnInit, OnDestroy, AfterViewInit {
  active = 0;
  activeId = 'active';
  @ViewChild('nav', { static: false }) nav: ElementRef<HTMLElement> | undefined;
  closed = true;
  subscription: Subscription | undefined;
  accessibleElelemnt: HTMLElement | undefined;

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
    this.offcanvasService.open(content, {
      position: 'top',
      panelClass: 'mt-5 panel',
    });
    this.megaMenuOpen(this.accessibleElelemnt!);
  }

  megaMenuOpen(element: HTMLElement) {
    this.offcanvasService;
    if (this.offcanvasService.hasOpenOffcanvas()) {
      element.style.transition = 'all 1s ease-in-out';
      element.style.color = 'black';
      element.style.backgroundColor = 'black';
      element.style.borderColor = 'black';
    } else {
      element.style.color = 'white';
      element.style.backgroundColor = 'transparent';
      element.style.borderColor = 'white';
    }
  }

  ngOnInit() {
    this.subscription = this.offcanvasService.activeInstance.subscribe(
      (element) => {
        element?.hidden.subscribe(() => {
          this.megaMenuOpen(this.accessibleElelemnt!);
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.accessibleElelemnt = this.nav?.nativeElement as HTMLElement;
  }
}
