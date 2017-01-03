/*
 
* streamer component

*/

import { Component, OnInit, Input } from '@angular/core';
import { StatusService } from '../StatusService/status.service';
import { Observable } from 'rxjs/Observable'

// status => online | offline | does not exist


@Component({
  selector: 'streamer-detail',
  template: 
  `
  <div *ngIf="(streamer$)">
    <div id="stream-info">
      <a [href]="streamer$.meta.url" id="link">
      <div id="status" [class]="streamer$.status"></div>
        <div id="text">
          <h1 id="name">{{streamer$.meta.name }}</h1>
          <h2 [ngSwitch]="streamer$.status">
            <h2 id="activity-name" *ngSwitchCase="'online'">{{streamer$.meta.game}}</h2>
            <h2 id="activity-name" *ngSwitchCase="'dne'">streamer does not exist</h2>
            <h2 id="activity-name" *ngSwitchDefault >offline</h2>
          </h2>
        </div>
        <img src="{{streamer$.meta.logo}}" id="avatar">
      </a>
    </div>
  </div>
  `,
  styleUrls: ['./streamerDetail.component.scss'],
  providers: [StatusService]
})
export class StreamerDetailComponent implements OnInit {

  @Input() name: string;
  streamer$: any;

  constructor(private statusService: StatusService) {}

  ngOnInit() {
    this.getChannel(this.name);
  }

  private setEmptyStreamer() {
    this.streamer$ = this.emptyStreamer
    this.streamer$.meta.name = this.name;
  }

  private getChannel(name) {
    this.statusService.getChannel(name).subscribe (
      x => this.getStream(name, x),
      e => this.setEmptyStreamer()
      )
  }

  private getStream(name, channel) {
    this.statusService.getStream(this.name).subscribe(
      x => this.setStreamInfo(channel, x),
      e => console.log("error getting Stream info", e)
      )
  }

  private setStreamInfo(channelRes, streamRes) {
    if(streamRes.stream) {
      // console.log("online: " + this.name);
      this.streamer$ = new this.Streamer(streamRes.stream.channel, "online");
    }
    else {
      console.log("offline: " + this.name, channelRes);
      this.streamer$ = new this.Streamer(channelRes, "offline");
    }
  }

//Streamer constructor
Streamer = function(meta, status) {
  this.meta = meta;
  this.status = status;
}

//used for 404 Streamer
private emptyStreamer =  {
 meta: {
  url: '#',
  game: 'streamer does not exist',
      logo: 'https://bemop.files.wordpress.com/2013/05/no-sign.jpg'
    },
    status:"dne"
  }
}