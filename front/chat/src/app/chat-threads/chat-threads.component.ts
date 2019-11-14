import {Component} from '@angular/core';
import {ThreadsService} from './threads.service';
import {Thread} from '../chat-thread/thread.model';

@Component({
  selector: 'chat-threads',
  templateUrl: 'chat-threads.component.html'
})
export class ChatThreadsComponent {

  threads: Array<Thread>;
  constructor(private threadsService: ThreadsService) {
    this.threads = threadsService.getOrderedThreads();
  }
}
