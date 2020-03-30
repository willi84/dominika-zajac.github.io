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

}
