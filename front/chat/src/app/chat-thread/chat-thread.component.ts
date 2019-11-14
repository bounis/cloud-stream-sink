import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Thread} from './thread.model';
import {ThreadsService} from '../chat-threads/threads.service';
import {ThreadService} from './thread.service';

@Component({
  selector: 'chat-thread',
  templateUrl: 'chat-thread.component.html'
})
export class ChatThreadComponent {

  @Input()
  thread: Thread;

  constructor(private threadService: ThreadService) {
  }

  threadClicked() {
    this.threadService.threadClicked(this.thread);
  }
}
