import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera.component';
import { ComponenteDos } from './componenteDos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ComponenteDos
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
