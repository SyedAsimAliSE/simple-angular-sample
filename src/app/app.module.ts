import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {WellsComponent} from './components/wells/wells.component';
import {WellsService} from "./services/wells.service";
import {WellsResolver} from "./components/wells/wells.resolver";

@NgModule({
  declarations: [
    AppComponent,
    WellsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WellsService, WellsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
