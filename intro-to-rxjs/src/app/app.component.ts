import { Component } from '@angular/core';
import { IUser } from './interfaces/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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

  constructor() {
    setInterval(() => {
      this.users.push({
        name: 'Ivar',
        age: -99,
      });
    }, 5000);
  }
  
  addNewUserHandler(newUser: IUser): void {
    this.users.push(newUser);
  }
}
