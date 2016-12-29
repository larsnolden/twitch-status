/*
 
* streamer component

*/

import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../StatusService/status.service';
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'streamer-detail',
  template: 
  `
  <div *ngIf="(streamer$)">
  <p>streamer exists</p>
  		<div id="stream-info">
  			<a href="{{streamer$.url}}" id="link">
  				<div id="status"></div>
    				<div id="text">
      				<h1 id="name">{{streamer$.name}}</h1>
      				<h2 id="activity-name">{{streamer$.game}}</h2>
    			</div>
  				<img src="{{streamer$.logo}}" id="avatar">
  			</a>
		</div>
  </div>
`,
  styleUrls: ['./streamerDetail.component.scss'],
  providers: [StatusService]
})
export class StreamerDetailComponent implements OnInit {

  @Input() name: string;
  //streamer$: Observable<any>;
  streamer$: any;

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    console.log(this.name);
    //this.streamer$ = this.statusService.getStatus(this.name);
    this.statusService.getStatus(this.name).subscribe(e => this.streamer$ = e);
  }
}