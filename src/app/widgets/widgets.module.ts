import { NgModule,Provider } from '@angular/core';
import { CommonModule } from '@angular/common';

export const CONTENT_COMPONENTS = [];

@NgModule({
  imports: [CommonModule],
  declarations: [...CONTENT_COMPONENTS],
  entryComponents: [...CONTENT_COMPONENTS],
})
export class WidgetModule { }