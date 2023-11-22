import { Component } from '@angular/core';
import { ParentUser } from './parent-user.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Elene_Botchoradze_Midterm';

  users = [
    { firstName: 'Cotne', lastName: 'Cotashvili', age: 35 },
    { firstName: 'Jemal', lastName: 'Gociridze', age: 88 },
    { firstName: 'Kato', lastName: 'Kirvalidze', age: 30 },
    { firstName: 'Jeko', lastName: 'Gociridze', age: 22 },
    { firstName: 'Taso', lastName: 'Gociridze', age: 19 },
  ];
  users_2: ParentUser[] = [
    {
      id: 0,
      firstName: 'Davit',
      lastName: 'Gociridze',
      dateOfBirth: 1976,
      phoneNumber: 599139919,
      email: 'e.bochoradze@gmail.com',
    },
    {
      id: 1,
      firstName: 'Nina',
      lastName: 'Gociridze',
      dateOfBirth: 1980,
      phoneNumber: 591313000,
      email: 'asd@ASD.com',
    },
    {
      id: 2,
      firstName: 'Merab',
      lastName: 'Darchia',
      dateOfBirth: 1976,
      phoneNumber: 590112332,
      email: 'merabi@gmail.com',
    },
    {
      id: 3,
      firstName: 'Nato',
      lastName: 'Kakachia',
      dateOfBirth: 1986,
      phoneNumber: 590112332,
      email: 'natonato@gmail.com',
    },
  ];
  userForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      id: [null],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      dateOfBirth: [''],
      phoneNumber: ['', [Validators.required, Validators.minLength(9)]],
      email: [
        '',
        [Validators.required, Validators.minLength(8), Validators.email],
      ],
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      this.userForm.reset();
    } else {
      this.markFormGroupTouched(this.userForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
