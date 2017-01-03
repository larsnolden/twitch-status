/*

* list component

*/

import { Component, OnInit } from '@angular/core';
import { StreamerDetailComponent} from '../../components/streamerDetail/streamerDetail.component';

@Component({
  selector: 'app-list',
  template: `
  <div *ngFor='let streamer of streamerList'>
    <streamer-detail [name]='streamer'></streamer-detail>
  </div>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  streamerList = ['ikealampe', 'bonjwa', 'xflixx_teampokerstars', 'rahmschnitzel', 'flamesword', 'comster404', 'ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'];
  
  constructor() {}

  ngOnInit() {
  }
}

