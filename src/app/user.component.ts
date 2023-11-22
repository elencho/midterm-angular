import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ChildUser } from './child-user.interface';
import { ParentUser } from './parent-user.interface';
import { DisplayService } from './display.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [DisplayService],
})
export class UserComponent {
  @Input() users: ParentUser[] = [];
  message = 'Array from parent component';
  @Output() usersFromChild = new EventEmitter<ChildUser[]>();
  messageFromChild = 'Array from child component';

  users_3: ChildUser[] = [
    {
      id: 0,
      firstName: 'Jeko',
      lastName: 'Gociridze',
      dateOfBirth: 2003,
      phoneNumber: 599139919,
      email: 'jeko@gmail.com',
    },
    {
      id: 1,
      firstName: 'Taso',
      lastName: 'Gociridze',
      dateOfBirth: 2004,
      phoneNumber: 591313000,
      email: 'taso@ASD.com',
    },
    {
      id: 2,
      firstName: 'Iva',
      lastName: 'Saatashvili',
      dateOfBirth: 2003,
      phoneNumber: 590112332,
      email: 'ivasaata@gmail.com',
    },
  ];
  emitUsersToParent() {
    this.usersFromChild.emit(this.users_3);
  }

  convertUsers() {
    this.users_3 = this.users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      dateOfBirth: user.dateOfBirth,
      phoneNumber: user.phoneNumber,
      email: user.email,
    }));
  }
  constructor(private displayService: DisplayService) {}

  displayUsers() {
    this.displayService.displayUsers(this.users);
  }
}
