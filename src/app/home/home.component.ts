import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events$: Observable<ScullyRoute[]>;

  constructor(private srs: ScullyRoutesService) { }

  ngOnInit() {
    this.srs.available$.subscribe(val => console.log(val));
    this.events$ = this.srs.available$.pipe(
      map(routeList => {
        return routeList.filter((route: ScullyRoute) =>
          route.route.startsWith(`/workshops/`),
        );
      })
    );
  }

  organizers = [
    {
      name: 'Revital Friedman',
      company: 'Opster',
      photo: 'assets/organizers/Revital_Friedman.jpg'
    },
    {
      name: 'Shmuela Jacobs',
      company: 'ngGirls',
      photo: 'assets/organizers/Shmuela_AC.jpg'
    },
    {
      name: 'Robert Willemelis',
      company: 'STRATO',
      photo: 'assets/organizers/robert.png'
    },
    {
      name: 'Martina Kraus',
      company: 'Self-Employed',
      photo: 'assets/organizers/martina.jpg'
    },
    {
      name: 'Katarzyna Płocka',
      company: 'Pragmatic Coders',
      photo: 'assets/organizers/pelcia.jpg'
    }
  ];

  partners = [
    { 
      link: "http://www.meetup.com/Angular-Nights/", 
      logo: "./assets/main-partners/ngNights.png"
    },
    {
      link: "https://youtu.be/IEfn4oOIkHg", 
      logo: "./assets/main-partners/ng-air-logo-light.png"
    },
    {
      link: "https://www.jetbrains.com/", 
      logo: "./assets/main-partners/JetBrains-logo.png"
    },
    {
      link: "https://ultimatecourses.com/", 
      logo: "./assets/main-partners/ultimate-courses.svg"
    },
    {
      link: "https://www.angularconnect.com/?utm_source=ng-girls.org&utm_medium=referral&utm_content=ng-girls&utm_campaign=workshops", 
      logo: "./assets/main-partners/angular-connect.png"
    },
    {
      link: "http://www.js-poland.pl/", 
      logo: "./assets/main-partners/js-poland-logo.png"
    },
    {
      link: "http://ng-poland.pl/", 
      logo: "./assets/main-partners/ngPoland.png"
    },
    {
      link: "https://www.ng-conf.org/", 
      logo: "./assets/main-partners/ng-conf.png"
    },
    {
      link: "https://ngvikings.org/", 
      logo: "./assets/main-partners/ngvikings.jpg" 
    },
    {
      link: "https://angular-austria.at/", 
      logo: "./assets/main-partners/Angular-Austria.png"
    },
    {
      link: "https://ngrome.io/home", 
      logo: "./assets/main-partners/ngrome.png"
    },
    {
      link: "https://softwarearchitekt.at/", 
      logo: "./assets/main-partners/softwarearchitekt.png"
    }
  ];
}
