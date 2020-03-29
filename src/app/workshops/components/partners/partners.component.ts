import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  @Input()
  partners;

  @Input()
  sponsorsCallMail;

  constructor() { }

  ngOnInit(): void {
  }

}
