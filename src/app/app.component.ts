import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <router-outlet></router-outlet>
    <nav>
      <a href="/">Home</a>
      |
      <a href="/user">User</a>
    </nav>
  `
})
export class AppComponent {}
