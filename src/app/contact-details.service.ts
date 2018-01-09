import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ContactDetailsService {

  constructor() { }

  public contactdetails = [];
  // API_ENDPOINT = 'http://localhost:3000/';

  saveContact(contact) {
    this.contactdetails.push(contact);
  };

  getAllContact() {
    return this.contactdetails;
    // return this.http.get(this.API_ENDPOINT + 'books')
    //       .subscribe((res:any) => {
    //         console.log('res', res);
    //         return res.json();
    //       })
  }

}

// import { Injectable, EventEmitter } from '@angular/core';
// import { Subject, BehaviorSubject } from 'rxjs/Rx';
// import { LocalStorageService } from '../../base/services';
// import { Observable } from 'rxjs/Rx';
// import * as moment from 'moment/moment';
// import { HttpClient } from 'app/base/services/httpClient.service';
// import { environment } from '../../../environments/environment';

// @Injectable()
// export class IntellilinenService {

//  // TODO: Inject HttpClient, and Pick URL from ENV Configuration
//   MOCKAPI_ENDPOINT = 'https://sdp-rof-drupal.s114.srijan-sites.com/api/v1/intellilinen';
//   API_ENDPOINT = environment.API_AWS_URL;

//  constructor(private http: HttpClient) { }

//  getGraphData(filters, apiName) {
//     const body = {
//       'api': apiName,
//       'solution': 'IntelliLinen',
//       'data': filters
//     };
//     const url = this.API_ENDPOINT;
//     return this.http.post(url, body)
//       .map((res: Response) => {
//         return res.json();
//       })
//       .catch(this.handleError);
//   }

//  getGraphDataFromMock(filters, apiName) {
//     const url = `${this.API_ENDPOINT}/${apiName}`;
//     return this.http.post(url, filters)
//       .map((res: Response) => {
//         return res.json();
//       })
//       .catch(this.handleError);
//   }

//  getFilterOptions(mail, apiName) {
//     // const url = `${this.MOCKAPI_ENDPOINT}/${apiName}`;
//     const url = `${this.API_ENDPOINT}`;
//     const body = {
//       'api': apiName,
//       'solution': 'IntelliLinen',
//       'data': {
//         'filters':
//         { email: mail }
//       }
//     };
//     return this.http.post(url, body)
//       .map((res: Response) => {
//         return res.json();
//       })
//       .catch(this.handleError);
//   }

//  private handleError(error: Response) {
//     return Observable.throw(error || 'Server Error');
//   }

//  getDateLabelByDate(date, groupBy) {
//     let formatedDate;
//     if (groupBy === 'day') {
//       formatedDate = moment(date, 'YYYY-M-DD hh:mm').format('DD:HH');
//     } else if (groupBy === 'week') {
//       formatedDate = moment(date, 'YYYY-M-DD hh:mm').format('DD.MM.YYYY');
//     } else if (groupBy === 'month') {
//       // get week from date
//       const weekNumber = moment(date, 'YYYY-M-DD hh:mm').isoWeek();
//       // get Start and End Date of the week
//       const startDate = moment(date).isoWeek(weekNumber).startOf('isoWeek').format('DD.MM.YYYY');
//       const endDate = moment(date).isoWeek(weekNumber).endOf('isoWeek').format('DD.MM.YYYY');
//       formatedDate = `${startDate}-${endDate}`;
//     } else if (groupBy === 'hours') {
//       formatedDate = moment(date, 'YYYY-M-DD hh:mm').format('HH:mm');
//     } else if (groupBy === 'months') {
//       formatedDate = moment(date, 'YYYY-M-DD hh:mm').format('MM.YYYY');
//     }

//    return formatedDate;
//   }

//  checkGraphData(res): boolean {
//     return res && res.data && (res.data.series || res.data.compare);
//   }
// }
