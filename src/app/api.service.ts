import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { of } from 'rxjs/observable/of';


@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getDateTimeAPI() {
    // Call the API and return the response (change the code below)
  
    let res = of(new Date());
    return res;
  }
}
