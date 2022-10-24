import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { YoutubePlaylistComponent } from './youtube/youtube-playlist/youtube-playlist.component';
import {AppRoutingModule} from "./app-routing.module";
import { YoutubePlayerComponent } from './youtube/youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
