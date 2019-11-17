import {Thread} from '../chat-thread/thread.model';
import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class ThreadsService {
  currentThread: Subject<Thread> = new BehaviorSubject<Thread>(null);
  setCurrentThread(thread: Thread): void {
    this.currentThread.next(thread);
  }
  getOrderedThreads(): Array<Thread> {
    const threads: Array<Thread> =
      [new Thread(1, 'first thread'), new Thread(2, 'second thread')];
    return threads;
  }
}
