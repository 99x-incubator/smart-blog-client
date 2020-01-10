import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignInComponent } from "./public/sign-in/sign-in.component";
import { SignUpComponent } from "./public/sign-up/sign-up.component";
import { CreateArticleComponent } from "./secure/create-article/create-article.component";
import { HomeComponent } from "./public/home/home.component";
import { ArticleComponent } from "./public/article/article.component";
import { EditArticleComponent } from "./secure/edit-article/edit-article.component";

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },
  { path: 'home', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const PublicComponents = [
  SignInComponent,
  SignUpComponent,
  CreateArticleComponent,
  EditArticleComponent,
  HomeComponent,
  ArticleComponent,
]