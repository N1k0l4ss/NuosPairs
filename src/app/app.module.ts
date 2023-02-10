import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderNavbarComponent} from './components/header-navbar/header-navbar.component';
import {Page404Component} from './components/page404/page404.component';
import {FooterComponent} from './components/footer/footer.component';
import {GroupSelectorComponent} from "./components/group-selector/group-selector.component";
import {SubjectsComponent} from "./components/subjects/subjects.component";
import { AdminComponent } from './components/admin/admin.component';
import { SubjectPopupComponent } from './subject-popup/subject-popup.component';


@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    HeaderNavbarComponent,
    Page404Component,
    FooterComponent,
    GroupSelectorComponent,
    AdminComponent,
    SubjectPopupComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }