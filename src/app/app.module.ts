import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipe } from './pipes';
import { PlayerItemComponent } from './components/player-item/player-item.component';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { MarkSelectDirective } from './directives/mark-select.directive';
import { TeamItemComponent } from './components/teams/team-item/team-item.component';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PlayerItemComponent,
    AgePipe,
    MarkSelectDirective,
    TeamItemComponent,
    TeamFormComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    NgxSmartModalModule.forRoot(),

    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
