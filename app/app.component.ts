import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Test'; }

@Component({
  selector: 'name',
  template: `<b> What {{what}} </b>`,
})
export class Name { what = 'test, '; }
