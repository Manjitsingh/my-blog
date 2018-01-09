import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { ContactDetailsService } from '../contact-details.service'

@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {

  constructor (
    public contactservice: ContactDetailsService
  ) { }

  saveAllContact(details) {
    let req = Object.assign({},details);
    this.contactservice.saveContact(req);
  }

  onSubmit(form, model) {
    if(form.valid == true) {
      this.saveAllContact(model);
    }
    else {
      // alert("Please check value of VAR");
      return false;
    }
  }

  model = { name: "", desc: "", age: ""};

  ngOnInit() {}
}
