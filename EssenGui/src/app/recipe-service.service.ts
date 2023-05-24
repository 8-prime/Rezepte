import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Recipe } from './recipe';
import { Category } from './category';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipe: BehaviorSubject<Recipe> = new BehaviorSubject( new Recipe("","",[], [],[]));


  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>('http://localhost:3000/categories/');
  }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>('http://localhost:3000/recipes/');
  }

  getCategoryById(id: string): Observable<Category>{
    return this.http.get<Category>(`http://localhost:3000/categories/byId/${id}`);
  }


  getRecipesForCategory(id: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`http://localhost:3000/recipes/byCategory/${id}`);
  }

  getRecipebyId(id: string): Observable<Recipe>{
    return this.http.get<Recipe>(`http://localhost:3000/recipes/byId/${id}`);
  }


  postRecipe(recipe: Recipe): Observable<any>{
    return this.http.post('http://localhost:3000/recipes/newRecipe', recipe);
  }

  deleteRecipe(recipeId: string){
    return this.http.delete(`http://localhost:3000/recipes/${recipeId}`);
  }
}
