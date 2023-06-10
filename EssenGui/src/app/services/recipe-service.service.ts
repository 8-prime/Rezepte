import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { response } from 'express';
import { Category } from '../classes/category';
import { Recipe } from '../classes/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  recipe: BehaviorSubject<Recipe> = new BehaviorSubject( new Recipe("","",[], [],[]));

  // baseUrl: string = 'http://localhost:3000';
  baseUrl: string = 'https://rezepteexpress.onrender.com';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.baseUrl}/categories/`);
  }

  getRecipes(): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes/`);
  }

  getCategoryById(id: string): Observable<Category>{
    return this.http.get<Category>(`${this.baseUrl}/categories/byId/${id}`);
  }


  getRecipesForCategory(id: string): Observable<Recipe[]>{
    return this.http.get<Recipe[]>(`${this.baseUrl}/recipes/byCategory/${id}`);
  }

  getRecipebyId(id: string): Observable<Recipe>{
    return this.http.get<Recipe>(`${this.baseUrl}/recipes/byId/${id}`);
  }


  postRecipe(recipe: Recipe): Observable<any>{
    return this.http.post(`${this.baseUrl}/recipes/newRecipe`, recipe);
  }

  postCategory(category: Category): Observable<any>{
    return this.http.post(`${this.baseUrl}/categories/newCategory`, category);
  }

  deleteRecipe(recipeId: string){
    return this.http.delete(`${this.baseUrl}/recipes/${recipeId}`);
  }

  login(password: string): boolean{
    console.log(password == 'demboys');
    
    return password == 'demboys';
  }
}
