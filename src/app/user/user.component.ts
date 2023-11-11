import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HeaderComponent],
  template: `
    <app-header>
      <p>
        UserComponent content!
      </p>
    </app-header>
  `
})
export class UserComponent {

}
