import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Value Capture</h1>
    <input type="text" (keyup)="getValue($event)" />
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  getValue(event: any) {
    console.log(event.target.value);
  }
}

