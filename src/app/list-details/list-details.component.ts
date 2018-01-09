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

  getContactData = []
  API_ENDPOINT = 'http://localhost:3000';

  constructor(
    public contactservice: ContactDetailsService,
    private http: HttpClient
  ) { }

  getContact() {
    this.getContactData = this.contactservice.getAllContact();
  }


  ngOnInit(): void {
    // this.getContact();
    this.http.get(`${this.API_ENDPOINT}/books`).subscribe(data => {
      // Read the result field from the JSON response.
      this.getContactData = data['books'];
    });
  }

}
