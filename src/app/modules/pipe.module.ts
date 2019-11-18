import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgePipe } from './../pipes';
@NgModule({
  declarations: [
    AgePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AgePipe
  ]
})
export class PipeModule { }
