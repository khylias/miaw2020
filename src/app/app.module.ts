import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { registerLocaleData, CommonModule } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgePipe } from './pipes';
import { PlayerItemComponent } from './components/player-item/player-item.component';
import { MarkSelectDirective } from './directives/mark-select.directive';
import { TeamItemComponent } from './components/teams/team-item/team-item.component';
import { TeamFormComponent } from './components/teams/team-form/team-form.component';
import { ApiService, FormManagerService, TokenStorageService } from './services';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    PlayerItemComponent,
    AgePipe,
    MarkSelectDirective,
    TeamItemComponent,
    TeamFormComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,


    NgxSmartModalModule.forRoot(),

    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    ApiService,
    FormManagerService,
    TokenStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
