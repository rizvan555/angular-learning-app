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

// @Component({
//   selector: 'app-root',
//   template: `
//     <h1>Value Capture</h1>
//     <!-- Burada moterize inputun icindekini geri gondermek ucundur, [] ise kodda modulun icinde yazdigimizin inputun icinde gorunmesi ucundur -->
//     <input type="name" [(ngModel)]="name" />
//     <button (click)="clickButton()">Enter</button>
//   `,
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   name: string = 'Rizvan';
//   clickButton() {
//     console.log(this.name);
//   }
// }

// ***** With Capture Value Credit Calculation  ******

@Component({
  selector: 'app-root',
  template: `
    <h1>Credit calculation</h1>
    <div>
      <label for="">Kredi Tutari:</label>
      <input type="text" [(ngModel)]="krediTutari" />
    </div>
    <div>
      <label for="">Faiz Tutari:</label>
      <select [(ngModel)]="faizTutari">
        <option>1</option>
        <option>5</option>
        <option>10</option>
      </select>
    </div>
    <button (click)="hesabla()">Hesabla</button>
    <hr />
    <div>
      <h2>Ayliq ödemem: {{ ayliqOdeme }}</h2>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  krediTutari: number = 10000;
  faizTutari: number = 1;
  ayliqOdeme: number = 0;

  hesabla() {
    this.ayliqOdeme = this.krediTutari / this.faizTutari;
  }
}
