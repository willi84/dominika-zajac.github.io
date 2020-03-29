import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent implements OnInit {

  navLinks = [
    { name: 'HOME', link: './' },
    { name: 'ABOUT', link: './' },
    { name: 'BE A PART', link: './' },
    { name: 'TEAM', link: './' },
    { name: 'PARTNERS', link: './' },
    { name: 'FAQ', link: './' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
