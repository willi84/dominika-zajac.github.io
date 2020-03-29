import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {

  @Input()
  mentors;

  constructor() { }

  ngOnInit(): void {
  }

}
