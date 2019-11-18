import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { ListeComponent } from './liste.component';
import { DetailsModule } from './details/details.module';

import { NgxSmartModalModule } from 'ngx-smart-modal';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,

    NgxSmartModalModule.forChild(),

    DetailsModule
  ],
  declarations: [ListeComponent],
  exports: [ListeComponent]
})
export class ListeModule { }
