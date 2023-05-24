import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  recipe: Recipe = new Recipe('', '', [], [], []);
  categories: Category[] = [];

  recipes: Recipe[] = [];


  loading: boolean = true;
  loadRecipes: boolean = true;

  constructor(private recipeService: RecipeServiceService){}


  ngOnInit(): void{
    this.loading = true;
    this.loadRecipes = true;
    this.recipeService.getCategories().subscribe(cats => {
      this.categories = cats;
      this.loading = false;
      console.log(this.categories);
    });
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.loadRecipes = false;
    })
  }


  edit(recipe:Recipe){
    this.recipe = recipe;
  }

  delete(recipe:Recipe){
    console.log("Removing Data");
    
    this.recipeService.deleteRecipe(recipe._id).subscribe(_ => {
      this.recipes = this.recipes.filter(obj => obj._id !== recipe._id);
    });
  }


  addIngredient(): void {
    this.recipe.ingredients.push('');
  }

  removeIngredient(index: number): void {
    this.recipe.ingredients.splice(index, 1);
  }
  
  addInstruction(): void {
    this.recipe.instructions.push('');
  }

  removeInstruction(index: number): void {
    this.recipe.instructions.splice(index, 1);
  }

  addCategory(): void{
    this.recipe.categoryIds.push('');
  }

  removeCategory(index: number): void {
    this.recipe.categoryIds.splice(index, 1);
  }

  onSubmit(): void {
    this.recipeService.postRecipe(this.recipe).subscribe(_ => {
      this.recipe = new Recipe('', '', [], [], []);
    });
    console.log('Submitted recipe:', this.recipe);
  }


  trackByFn(index: number, item: string): number{
    return index;
  }


  logData(){
    console.log(this.recipe);
    
    
  }
}
