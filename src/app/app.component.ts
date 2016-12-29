/*

* app-component

*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: 
  `
  			<div id="banner">
  				<h1>Twitcher</h1>
			</div>
			<app-list></app-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
}
