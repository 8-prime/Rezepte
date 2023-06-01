import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { RecipeAddComponent } from './pages/recipe-add/recipe-add.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { DeleteButtonComponent } from './components/delete-button/delete-button.component';
import { EditButtonComponent } from './components/edit-button/edit-button.component';
import { TextButtonComponent } from './components/text-button/text-button.component';
import { RecipeListComponent } from './pages/recipe-list/recipe-list.component';
import { RecipeDisplayComponent } from './components/recipe-display/recipe-display.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CategoryAddComponent } from './pages/category-add/category-add.component';
import { CategoryEditDialogComponent } from './components/category-edit-dialog/category-edit-dialog.component';



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
    EditDialogComponent,
    DeleteButtonComponent,
    EditButtonComponent,
    TextButtonComponent,
    CategoryAddComponent,
    CategoryEditDialogComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSkeletonLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
