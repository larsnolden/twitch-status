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
  		<div id="stream-info">
  			<a href="{{streamer$.url}}" id="link">
          <div id="status" [class]="streamer$.game ? 'online' : 'offline'" [class.dne]="streamer$.dne"></div>
    				<div id="text">
      				<h1 id="name">{{streamer$.name}}</h1>
      				<h2 id="activity-name" [innerHTML]="streamer$.game ? streamer$.game : 'offline'"></h2>
    			</div>
  				<img src="{{streamer$.logo}}" id="avatar">
  			</a>
		</div>
  </div>

  <div *ngIf="!streamer$">
    <div id="stream-info">
      Streamer {{name}} does not exist!
    </div>
  <div>
`,
  styleUrls: ['./streamerDetail.component.scss'],
  providers: [StatusService]
})
export class StreamerDetailComponent implements OnInit {

  @Input() name: string;
  streamer$: any;

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    //get streamer data
    this.statusService.getStatus(this.name).subscribe(e => this.streamer$ = e);

    //replace data for unavailable streamer
    if(!this.streamer$) {
      this.streamer$ = {
        dne: true,
        name: this.name,
        game: 'streamer does not exist',
        logo: 'https://bemop.files.wordpress.com/2013/05/no-sign.jpg'
      }
    }
  }
}

//<div id="status" [class.offline]="streamer$.game"></div>