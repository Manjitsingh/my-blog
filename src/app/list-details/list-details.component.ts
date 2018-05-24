import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContactDetailsService } from '../contact-details.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'list-details',
  templateUrl: './list-details.component.html',
  styleUrls: ['./list-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListDetailsComponent implements OnInit {

  getContactData = [];

  constructor(
    public contactservice: ContactDetailsService,
    private httpClient: HttpClient
  ) { }


  listContact() {
    this.httpClient.get('http://localhost:8888/')
    .subscribe(
      (res: any) => {
        this.getContactData = res;
      }
    )
  }

  ngOnInit(): void {
    this.listContact();
  }

}
