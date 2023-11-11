import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [HeaderComponent],
    template: `
      <app-header>
        <p>
          HomeComponent content!
        </p>
      </app-header>
    `
})
export class HomeComponent {

}
