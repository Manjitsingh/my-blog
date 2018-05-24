import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContactDetailsService {

  constructor() { }

  public contactdetails = [];

  saveContact(contact) {
    this.contactdetails.push(contact);
  };

  getAllContact() {
    return this.contactdetails;
  }
}
