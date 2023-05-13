import { Component } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  recipe: Recipe = new Recipe('', '', [], [], []);

  constructor(private recipeService: RecipeServiceService){}

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

  onSubmit(): void {
    this.recipeService.postRecipe(this.recipe).subscribe();
    console.log('Submitted recipe:', this.recipe);
  }


  trackByFn(index: number, item: string): number{
    return index;
  }
}
