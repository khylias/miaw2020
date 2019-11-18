import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localeFr from '@angular/common/locales/fr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeModule } from './components/liste/liste.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    NgxSmartModalModule.forRoot(),

    ListeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
