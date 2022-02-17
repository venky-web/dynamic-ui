import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesModule } from './directives';
import { WidgetModule } from './widgets';
import { ArrayWidgetModule } from './widgets/array.widget';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetModule,
    ArrayWidgetModule,
    DirectivesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
