import { Injectable } from '@angular/core';

import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  title = 1;
  showText = true;

  users = [
    {
      name: 'Ivan',
      age: 100,
    },
    {
      name: 'George',
      age: 101,
    },
    {
      name: 'Boko',
      age: 102,
    },
  ];

  buttonHandler(): void {
    const current = this.title++;

    this.users.push({
      name: `Ivan ${current}`,
      age: 20 + current,
    });
  }

  toggleVisibility(): void {
    this.showText = !this.showText;
  }

  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }
}
