import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailsComponent } from './category-details/category-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    CategoryListComponent,
    CategoryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
