import {EventEmitter, Injectable, Output} from '@angular/core';
import {Thread} from './thread.model';

@Injectable()
export class ThreadService {

  @Output()
  showWindow: EventEmitter<Thread> = new EventEmitter<Thread>();
  threadClicked(thread: Thread) {
    this.showWindow.emit(thread);
  }
}
