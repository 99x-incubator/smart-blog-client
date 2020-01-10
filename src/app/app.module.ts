import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule, PublicComponents } from "./app-routing.module";

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';

import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    FooterComponent,
    PublicComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule
  ],
  providers: [UserService, ArticleService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }