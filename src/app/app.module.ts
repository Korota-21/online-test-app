import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InstructionsComponent } from './instructions/instructions.component';
import { FormatTimePipe, TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InstructionsComponent,
    FormatTimePipe,
    TimerComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
