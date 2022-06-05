import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InstructionsComponent } from './components/instructions/instructions.component';
import { FormatTimePipe, TimerComponent } from './components/timer/timer.component';
import { TestComponent } from './components/test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InstructionsComponent,
    FormatTimePipe,
    TimerComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
