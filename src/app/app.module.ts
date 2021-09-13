import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AeroflotComponent } from './components/Aeroflot/aeroflot.component';
import { FormsComponent } from './components/Forms/forms.component';
import { RRComponent } from './components/RussianRailways/rr.component';
import { RatesDataService } from './services/ratesData.service';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    AeroflotComponent,
    RRComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RatesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
