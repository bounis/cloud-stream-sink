import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ChatThreadComponent} from './chat-thread/chat-thread.component';
import {ThreadsService} from './chat-threads/threads.service';
import {ChatThreadsComponent} from './chat-threads/chat-threads.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {ThreadService} from './chat-thread/thread.service';
import {MessageService} from './message/Message.service';

@NgModule({
  declarations: [
    AppComponent,
    ChatThreadComponent,
    ChatThreadsComponent,
    ChatWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThreadsService, ThreadService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
