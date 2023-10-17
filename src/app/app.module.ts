import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './sections/introduction/introduction.component';
import {ButtonModule} from "primeng/button";
import { EducationComponent } from './sections/education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import {SectionComponent} from "./components/section/section.component";
import { ExperienceComponent } from './sections/experience/experience.component';
import { TechnologyStackComponent } from './sections/technology-stack/technology-stack.component';
import { ContactComponent } from './sections/contact/contact.component';
import {SpeedDialModule} from "primeng/speeddial";
import { TypewriterComponent } from './components/typewriter/typewriter.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    IntroductionComponent,
    EducationComponent,
    SectionComponent,
    ExperienceComponent,
    TechnologyStackComponent,
    ContactComponent,
    TypewriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    TranslocoRootModule,
    SpeedDialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
