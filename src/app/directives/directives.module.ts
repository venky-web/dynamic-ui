import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ViewContainerDirective } from './view-container.directive';


@NgModule({
  declarations: [
    ViewContainerDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ViewContainerDirective,
  ],
  providers: [],
})
export class DirectivesModule { }
