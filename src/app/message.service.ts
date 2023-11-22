import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSubject = new BehaviorSubject<{ message: string; data: any[] }>({ message: '', data: [] });
  getMessage() {
    return this.messageSubject.asObservable();
  }

  setMessage(message: string, data: any[]) {
    this.messageSubject.next({ message, data });
  }
}