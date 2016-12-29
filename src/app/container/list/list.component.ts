/*

* list component

*/

import { Component, OnInit } from '@angular/core';
import { StreamerDetailComponent} from '../../components/streamerDetail/streamerDetail.component';

@Component({
  selector: 'app-list',
  template: `
  <div *ngFor="let streamer of streamerList">
    <streamer-detail [name]="streamer"></streamer-detail>
  </div>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  streamerList = ['ikealampe', 'bonjwa'];
  
  constructor() {}

  ngOnInit() {
  }
}

