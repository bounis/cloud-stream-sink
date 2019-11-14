import {Component, Input} from '@angular/core';
import {Thread} from '../chat-thread/thread.model';

@Component({
  selector: 'chat-window',
  templateUrl: 'chat-window.component.html'
})
export class ChatWindowComponent {

  @Input()
  thread: Thread;
}
