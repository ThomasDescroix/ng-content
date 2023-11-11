import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <h1>{{ title }}</h1>
      <ng-content></ng-content>
    </header>
  `,
  styles: `
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #000;
      color: #fff;
    }
  `
})
export class HeaderComponent {
  title = 'ng-content';
}
