import { NgModule }               from '@angular/core';
import { Location,
         LocationStrategy }       from '@angular/common';
import { BrowserModule }          from '@angular/platform-browser';
import { CookieLawModule }        from '../../';
import { AppComponent }           from './app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    CookieLawModule
  ]
})
export class AppModule { }