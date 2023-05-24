import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { CategoryListComponent } from './category-list/category-list.component';

import { HttpClientModule } from '@angular/common/http';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { RecipeDisplayComponent } from './recipe-display/recipe-display.component';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    CategoryListComponent,
    CategoryDetailsComponent,
    RecipeAddComponent,
    LoadingSpinnerComponent,
    RecipeDisplayComponent,
    EditDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
