import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryDetailsComponent } from './pages/category-details/category-details.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { RecipeAddComponent } from './pages/recipe-add/recipe-add.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';

const routes: Routes = [
  {path: 'recipes/:id', component: RecipeDetailComponent},
  {path: 'category/:id', component: CategoryDetailsComponent},
  {path: 'addRecipe', component: RecipeAddComponent},
  {path: 'allRecipes', component: RecipeListComponent},
  {path: '', component: CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
