import {Component, Input, OnInit} from '@angular/core';
import {Thread} from '../chat-thread/thread.model';
import {Message} from '../message/message.model';
import {MessageService} from '../message/Message.service';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'chat-window',
  templateUrl: 'chat-window.component.html'
})
export class ChatWindowComponent {

  @Input()
  thread: Thread;

  constructor(private messageService: MessageService) {
  }

  sendMessage(textMsg: HTMLTextAreaElement) {
    this.messageService.getMessages().push
    (new Message(this.messageService.getMessages().length, this.thread.id, textMsg.value, new Date()));
    console.log(this.messageService.getMessages());
  }

  getMessages() {
    // return this.messageService.getMessagesByThreadId(this.thread.id);
    return this.messageService.newMessages.pipe(filter(msg => msg.threadId === this.thread.id));
  }
}
