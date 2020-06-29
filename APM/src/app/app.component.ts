import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: `
  <div><H1>{{pageTitle}}</H1>
    <pm-products></pm-products>
  </div>
  `
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}