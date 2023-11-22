import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { ChildUser } from './child-user.interface';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  message = '';
  data: ChildUser[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.messageService.getMessage().subscribe(({ message, data }) => {
      this.message = message;
      this.data = data;
    });
  }
}
