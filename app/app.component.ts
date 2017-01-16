import { Component } from '@angular/core';

@Component({
  selector: 'header',
  template: ``,
})
//export class Header  { header = '<ul><li>gkgns</li><li>jgbsgjs</li></ul>'; }

@Component({
  selector: 'name',
  template: `<b> What {{what}} </b>`,
})
export class Name { what = 'test, '; }
