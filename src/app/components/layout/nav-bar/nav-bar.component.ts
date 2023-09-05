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
import {
  NgbNavModule,
  NgbOffcanvas,
  NgbAccordionModule,
} from '@ng-bootstrap/ng-bootstrap';
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
    NgbAccordionModule,
  ],
})
export class NavBarComponent implements OnInit, OnDestroy, AfterViewInit {
  active = 0;
  activeId = 'active';
  @ViewChild('nav', { static: false }) nav: ElementRef<HTMLElement> | undefined;
  closed = true;
  subscription: Subscription | undefined;
  accessibleElement: HTMLElement | undefined;

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

  openTop(content: TemplateRef<HTMLElement>) {
    if (this.offcanvasService.hasOpenOffcanvas()) {
    } else {
      this.offcanvasService.open(content, {
        position: 'top',
        panelClass: 'panel',
      });
      this.megaMenuOpen(this.accessibleElement!);
    }
  }

  opentMobile(mobile: TemplateRef<HTMLElement>) {
    if (this.offcanvasService.hasOpenOffcanvas()) {
    } else {
      this.offcanvasService.open(mobile, {
        position: 'end',
        panelClass: 'vw-100',
      });
      this.megaMenuOpen(this.accessibleElement!);
    }
  }

  megaMenuOpen(element: HTMLElement) {
    this.offcanvasService;
    if (this.offcanvasService.hasOpenOffcanvas()) {
      element.style.transition = 'all 1s ease-in-out';
      element.style.backgroundColor = 'var(--copy-color)';
    } else {
      element.style.backgroundColor = 'transparent';
    }
  }

  ngOnInit() {
    this.subscription = this.offcanvasService.activeInstance.subscribe(
      (element) => {
        element?.hidden.subscribe(() => {
          this.megaMenuOpen(this.accessibleElement!);
        });
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.accessibleElement = this.nav?.nativeElement as HTMLElement;
  }
}
