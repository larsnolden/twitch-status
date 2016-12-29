//* Status Service

import { Injectable } from '@angular/core';
import { Http, RequestOptions, Request, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class StatusService {
  private twitchUrl = 'https://api.twitch.tv/kraken/channels/';
  private options = new RequestOptions({headers: new Headers({'Client-ID': 'e0p8ccke9zke6d09tb4kjqsi8abo39'})});

  constructor(private http: Http) {}
  

  getStatus(username: string): Observable<any> {
    let url = this.twitchUrl + username;
  	return this.http.get(url, this.options).map(response => response.json());
  }
}