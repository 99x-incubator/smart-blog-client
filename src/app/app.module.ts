import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SignUpComponent } from './public/sign-up/sign-up.component';
import { TopNavComponent } from './shared/top-nav/top-nav.component';
import { HomeComponent } from './public/home/home.component';
import { SignInComponent } from './public/sign-in/sign-in.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ArticleComponent } from './public/article/article.component';
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';

import { QuillModule } from 'ngx-quill';
import { CreateArticleComponent } from './secure/create-article/create-article.component';
import { EditArticleComponent } from './secure/edit-article/edit-article.component';

const router: Routes = [
  { path: 'sign-in' , component: SignInComponent},
  { path: 'sign-up' , component: SignUpComponent},
  { path: 'createarticle', component: CreateArticleComponent},
  { path: 'home' , component: HomeComponent},
  { path: 'article' , component: ArticleComponent},
  { path: 'article/:id' , component: ArticleComponent},
  { path: '' , redirectTo: '/home' , pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TopNavComponent,
    HomeComponent,
    SignInComponent,
    FooterComponent,
    ArticleComponent,
    CreateArticleComponent,
    EditArticleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(router),
    QuillModule
  ],
  providers: [UserService, ArticleService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
