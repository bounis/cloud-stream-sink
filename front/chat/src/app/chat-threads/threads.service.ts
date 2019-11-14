import {Thread} from '../chat-thread/thread.model';
import {Injectable} from '@angular/core';

@Injectable()
export class ThreadsService {
  currentThread: Thread;
  setCurrentThread(thread: Thread): void {
    this.currentThread = thread;
  }

  getCurrentThread(): Thread {
    return this.currentThread;
  }

  getOrderedThreads(): Array<Thread> {
    const threads: Array<Thread> =
      [new Thread('1', 'first thread'), new Thread('2', 'second thread')];
    return threads;
  }
}
