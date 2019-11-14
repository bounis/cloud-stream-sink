import {Component, OnInit} from '@angular/core';
import {ThreadService} from './chat-thread/thread.service';
import {Thread} from './chat-thread/thread.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  thrr: boolean;
  thread: Thread;

  constructor(private threadService: ThreadService) {
  }

  ngOnInit(): void {
    this.threadService.showWindow.subscribe(thr => {
      if (thr) {
        this.thrr = true;
        this.thread = thr;
      }
    });
  }

}
