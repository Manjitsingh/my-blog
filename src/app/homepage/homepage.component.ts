import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Homepage } from '../homepage';
import { homepageData } from '../homepage.mock';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomepageComponent implements OnInit {

  data = homepageData;

  constructor() { }

  ngOnInit() {
  }

}
