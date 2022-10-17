import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 1;

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
}
