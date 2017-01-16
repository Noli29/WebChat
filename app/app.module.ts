import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Header }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ Header ],
  bootstrap:    [ Header ]
})
export class AppModule { }
