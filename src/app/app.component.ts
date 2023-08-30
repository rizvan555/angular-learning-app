import { Component } from '@angular/core';

// ***********  Capture Value with JS *************
// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>Value Capture</h1>
//     <input type="text" (keyup)="getValue($event)" />
//   `,
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   getValue(event: any) {
//     console.log(event.target.value);
//   }
// }

// ***** Capture Value with ngModel (app.modulede FormsModule-ni import etmeyi unutma) ******

@Component({
  selector: 'app-root',
  template: `
    <h1>Value Capture</h1>
    <!-- Burada moterize inputun icindekini geri gondermek ucundur, [] ise kodda modulun icinde yazdigimizin inputun icinde gorunmesi ucundur -->
    <input type="name" [(ngModel)]="name" />
    <button (click)="clickButton()">Enter</button>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name: string = 'Rizvan';
  clickButton() {
    console.log(this.name);
  }
}
