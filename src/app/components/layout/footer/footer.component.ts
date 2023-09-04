import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, NgbAccordionModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  year = new Date().getFullYear();

  footerLinks = [
    {
      name: 'Contact & Support',
      links: [
        {
          name: 'Contact us',
          href: 'https://www.bmw.co.za/en/integration/contact-us.html',
        },
        {
          name: 'Find a BMW Retailer',
          href: 'https://www.bmw.co.za/en/fastlane/bmw-retailer-locator.html',
        },
        {
          name: 'BMW On Call',
          href: 'https://www.bmw.co.za/en/topics/offers-and-services/roadside-assistance/on-call.html',
        },
        {
          name: 'Teleservices',
          href: 'https://www.bmw.co.za/en/topics/offers-and-services/service-workshop/bmw-teleservices.html',
        },
      ],
    },
    {
      name: 'OFFERS',
      links: [
        {
          name: 'BMW 50 Year Offer',
          href: 'https://www.bmw.co.za/en/topics/fascination-bmw/limited-offers/50-year-offer.html',
        },
      ],
    },
    {
      name: 'Quick Links',
      links: [
        {
          name: 'Book a test drive',
          newTab: true,
          href: 'https://buy.bmw.co.za/test-drives',
        },
        {
          name: 'Download a Price List',
          newTab: true,
          href: 'https://www.bmw.co.za/content/dam/bmw/marketZA/bmw_co_za/Documents/Price%20Lists/2023/q3/BMW_Range_Price_List_July_2023.pdf.asset.1687850562272.pdf',
        },
        {
          name: 'Book a Service',
          newTab: true,
          href: 'https://www.bmw.co.za/en/topics/offers-and-services/service-workshop/bmw_services.html',
        },
      ],
    },
    {
      name: 'Explore BMW Group',
      links: [
        {
          name: 'BMW Financial Services',
          href: 'https://www.bmw.co.za/en/topics/offers-and-services/bmw-financial-services/bmw-financial-services.html',
        },
        {
          name: 'MINI South Africa',
          newTab: true,
          href: 'https://www.mini.co.za/en_ZA/home.html',
        },
        {
          name: 'BMW Motorrad',
          newTab: true,
          href: 'https://www.bmw-motorrad.co.za/en/home.html#/filter-all',
        },
        {
          name: 'BMW IT Hub',
          newTab: true,
          href: 'https://www.bmwithub.co.za/',
        },
        {
          name: 'BMW Careers',
          newTab: true,
          href: 'https://www.bmwgroup.jobs/za/en.html',
        },
        {
          name: 'Investment Opportunities',
          href: 'https://www.bmw.co.za/en/topics/fascination-bmw/investment-opportunities.html',
        },
      ],
    },
    {
      name: 'Legal',
      links: [
        {
          name: 'PAIA & POPIA Manual',
          href: 'https://www.bmw.co.za/en/footer/metanavigation/legal-disclaimer-pool/paia-manual.html',
        },
        {
          name: 'BMW B-BBEE Certificates',
          href: 'https://www.bmw.co.za/en/footer/metanavigation/legal-disclaimer-pool/bmw-bbbee-certificate.html',
        },
        {
          name: 'Compliance',
          href: 'https://www.bmw.co.za/en/topics/offers-and-services/bmw-financial-services/legislation.html',
        },
        {
          name: 'BMW ConnectedDrive Legal Notice',
          href: 'https://www.bmw.co.za/en/topics/fascination-bmw/connected-drive/bmw-connected-drive-overview.html',
        },
        {
          name: 'BMW ConnectedDrive Terms & Conditions',
          href: 'https://www.bmw.co.za/en/topics/fascination-bmw/connected-drive/bmw-connected-drive-overview.html',
        },
      ],
    },
  ];

  socialMediaLinks = [
    {
      name: 'facebook',
      src: 'https://www.bmw.co.za/content/dam/bmw/common/footer/social/facebook-hover@2x.png.asset.1584959819913.png',
      href: 'https://www.facebook.com/BMWSA',
    },
    {
      name: 'twitter',
      src: 'https://www.bmw.co.za/content/dam/bmw/common/footer/social/twitter-hover@2x.png.asset.1584959823635.png',
      href: 'https://twitter.com/BMW_SA',
    },
    {
      name: 'instagram',
      src: 'https://www.bmw.co.za/content/dam/bmw/common/footer/social/instagram-hover@2x.png.asset.1584959820398.png',
      href: 'https://www.instagram.com/bmwsouthafrica/',
    },
    {
      name: 'youtube',
      src: 'https://www.bmw.co.za/content/dam/bmw/common/footer/social/youtube-hover@2x.png.asset.1584959824385.png',
      href: 'https://www.youtube.com/user/BMWSouthAfrica',
    },
    {
      name: 'linkedin',
      src: 'https://www.bmw.co.za/content/dam/bmw/common/footer/social/linkedin-hover@2x.png.asset.1584959821340.png',
      href: 'https://www.linkedin.com/company/bmwsouthafrica',
    },
  ];

  legalLinks = [
    {
      name: 'Legal Notice',
      href: 'https://www.bmw.co.za/en/footer/metanavigation/legal-disclaimer-pool/legal-disclaimer.html',
    },
    {
      name: 'Privacy Statement',
      href: 'https://www.bmw.co.za/en/footer/metanavigation/legal-disclaimer-pool/privacy-statement.html',
    },
    {
      name: 'Cookie Policy',
      href: 'https://www.bmw.co.za/en/footer/footer-section/cookie-policy.html',
    },
  ];
}
