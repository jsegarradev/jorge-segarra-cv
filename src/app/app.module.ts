import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MenuComponent } from './menu/menu.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {ButtonModule} from "primeng/button";
import { EducationComponent } from './education/education.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MenuComponent,
    IntroductionComponent,
    EducationComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        DropdownModule,
        FormsModule,
        BrowserAnimationsModule,
        ButtonModule,
        HttpClientModule,
        TranslocoRootModule

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
