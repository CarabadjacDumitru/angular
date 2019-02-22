import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontComponent } from './components/front/front.component';
import { HeaderComponent } from './components/section/header/header.component';
import { CenterComponent } from './components/section/center/center.component';
import { FooterComponent } from './components/section/footer/footer.component';
import { StartComponent } from './components/start/start.component';
import { PhoneComponent } from './components/phone/phone.component';
import { IdentificationComponent } from './components/identification/identification.component';
import { SubmitComponent } from './components/submit/submit.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    StartComponent,
    PhoneComponent,
    IdentificationComponent,
    SubmitComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
