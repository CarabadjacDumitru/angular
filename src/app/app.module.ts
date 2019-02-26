import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/section/header/header.component';
import { CenterComponent } from './components/section/center/center.component';
import { FooterComponent } from './components/section/footer/footer.component';
import { StartComponent } from './components/steps/1_Start/start.component';
import { PhoneComponent } from './components/steps/2_PhoneNumber/phone.component';
import { IdentificationComponent } from './components/steps/3_identification/identification.component';
import { SubmitComponent } from './components/steps/5_submit/submit.component';
import { PersonalInformationComponent } from './components/steps/4_PersonalInformation/personal-information/personal-information.component';
import { FrontComponent } from './components/front/front.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    StartComponent,
    PhoneComponent,
    IdentificationComponent,
    SubmitComponent,
    PersonalInformationComponent,
    FrontComponent
  ],
  imports: [
    FormsModule ,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
