import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsComponent } from './details.component';
import { PipeModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,

    PipeModule
  ],
  declarations: [DetailsComponent],
  exports: [DetailsComponent]
})
export class DetailsModule { }
