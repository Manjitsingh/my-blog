import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Hero } from '../hero';
import { ContactDetailsService } from '../contact-details.service';
import { Http, Response, Headers } from '@angular/http';
@Component({
  selector: 'add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss', '../app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddComponent implements OnInit {
  name:string = '';
  age:number;
  found:boolean = false;

  constructor (
    public contactservice: ContactDetailsService,
    private http: Http
  ) { }

  contactObj:object = {};

  fileChangeEvent(event) {
    console.log(event['path']['0']['files']['0']['name']);
  }

  onSubmit(model) {
    this.contactObj = {
      "name": model.name,
      "age": model.age,
      "place": model.place,
      "photo": model.photo
    }
    console.log(this.contactObj);
    console.log(model.photo);
    this.http.post('http://localhost:8888/', this.contactObj).subscribe((res:Response) => {
      // console.log(res);
    })
  }
  model = { name: "", age: "", place: ""};

  ngOnInit() {}
}
