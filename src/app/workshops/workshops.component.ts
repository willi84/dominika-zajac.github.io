import { Component, ViewEncapsulation } from '@angular/core';
import { ScullyRoutesService, TransferStateService } from '@scullyio/ng-lib';
import { HttpClient } from '@angular/common/http';
import { switchMap, share } from 'rxjs/operators';

@Component({
  selector: 'app-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class WorkshopsComponent {

  workshop$;

  constructor(private srs: ScullyRoutesService, private transferStateService: TransferStateService, private http: HttpClient) {
    this.workshop$ = this.srs.getCurrent().pipe(
      switchMap((route) => {
        return  this.transferStateService.useScullyTransferState(
          'workshop',
          this.getWorkshops(route.route)
        );
      }),
      share()
    );
  }

  getWorkshops(route) {
    return this.http.get('/assets/data' + route + '.json');
  }

  openLink(link: string) {
    link = link.indexOf("http") > -1 ? link : `http://${link}`;
    window.open(link, "_blank");
  }

}
