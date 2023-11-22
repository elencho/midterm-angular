import { Injectable } from '@angular/core';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  constructor(private messageService: MessageService) {}

  displayUsers(users: any[]) {
    console.log('Array is displayed by Display service');
    console.log(users);

    this.messageService.setMessage(
      'Array is displayed by Display service',
      users
    );
  }
}
