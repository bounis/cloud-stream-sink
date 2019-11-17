/**
 * Message represents one message being sent in a Thread
 */
export class Message {

  id: number;
  threadId: number;
  text: string;
  sentAt: Date;


  constructor(id: number, threadId: number, text: string, sentAt: Date) {
    this.id = id;
    this.threadId = threadId;
    this.text = text;
    this.sentAt = sentAt;
  }
}
