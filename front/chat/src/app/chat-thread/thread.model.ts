import {Message} from '../message/message.model';
import {uuid} from '../util/uuid';

/**
 * Thread represents a group of Users exchanging Messages
 */
export class Thread {
  id: number;
  lastMessage: Message;
  name: string;
  avatarSrc: string;

  constructor(id?: number,
              name?: string,
              avatarSrc?: string) {
    this.id = id;
    this.name = name;
    this.avatarSrc = avatarSrc;
  }
}
