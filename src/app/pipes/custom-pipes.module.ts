import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConvertToNormalPipe } from './camel-case.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
      ConvertToNormalPipe,
  ],
  exports: [
    ConvertToNormalPipe,
  ]
})
export class PipesModule { }