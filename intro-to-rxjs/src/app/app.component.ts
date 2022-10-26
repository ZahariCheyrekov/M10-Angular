import { Component } from '@angular/core';
import { of, map } from 'rxjs';

import { UserService } from './user.service';

Promise.resolve(1000)
  .then((x) => x + 1)
  .then(console.log);

of(1000)
  .pipe(map((x) => x + 100))
  .subscribe((x) => {
    console.log(x);
  });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'components-lecture';
  
  constructor(public userService: UserService) {}
}
