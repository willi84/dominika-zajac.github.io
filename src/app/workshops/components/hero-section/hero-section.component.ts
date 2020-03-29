import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {

  @Input()
  mentorsFormLink;

  @Input()
  sectionBg;

  @Input()
  participantsFormLink;

  @Input()
  date;

  @Input()
  city;

  @Input()
  country;


  constructor() { }

  ngOnInit(): void {
  }

  openLink(link: string) {
    link = link.indexOf("http") > -1 ? link : `http://${link}`;
    window.open(link, "_blank");
  }

}
