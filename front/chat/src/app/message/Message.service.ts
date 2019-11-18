import {Message} from './message.model';
import {Injectable} from '@angular/core';
import * as _ from 'lodash';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class MessageService {

  messages: Array<Message> = [
    new Message(1, 1, 'message thread 1', new Date()),
    new Message(2, 2, 'message thread  2', new Date()),
    new Message(3, 3, 'message thread  3', new Date()),
  ];

  newMessages: Subject<Message> = new Subject<Message>();
  getMessages(): Array<Message> {
    return this.messages;
  }

  getMessagesByThreadId(threadId: number): Array<Message> {
    return _.filter(this.messages, msg => msg.threadId === threadId);
  }
}
