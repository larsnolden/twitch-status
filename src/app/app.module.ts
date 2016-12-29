import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StreamerDetailComponent } from './components/streamerDetail/streamerDetail.component';
import { ListComponent } from './container/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamerDetailComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
