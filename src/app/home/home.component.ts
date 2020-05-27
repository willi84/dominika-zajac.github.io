import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScullyRoute, ScullyRoutesService, TransferStateService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { organizers } from './organizers-list';
import { partners } from './parnters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  events$: Observable<ScullyRoute[]>;
  organizers = organizers;
  partners = partners;
  posts$: Observable<ScullyRoute[]>;
  workshop$;
  upcomingWorkshop$;
  constructor(private srs: ScullyRoutesService,
    private transferStateService: TransferStateService, private http: HttpClient) {
       this.upcomingWorkshop$ = this.transferStateService.useScullyTransferState(
                'workshop',
                this.getOneJson()
            );
    }
   
  getOneJson() {
    return this.http.get('/assets/data/workshops.json');
  }

  ngOnInit() {
    // this.events$ = this.srs.available$.pipe(
    //   map(routeList => {
    //     return routeList.filter((route: ScullyRoute) =>
    //       route.route.startsWith(`/workshops/`),
    //     );
    //   })
    // );
    // this.posts$ = this.srs.available$.pipe(
    //   map(routeList => {
    //     return routeList.filter((route: ScullyRoute) => 
    //     route.route.startsWith(`/blog/`))
    //   }),
    //   map(posts => posts.slice(0, 3))
    // )
  }
}
