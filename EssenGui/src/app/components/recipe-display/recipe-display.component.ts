import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/classes/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.css']
})
export class RecipeDisplayComponent {

  @Input() recipes: Recipe[] = [];
  @Input() loading: boolean = true;

  constructor(private recipeService: RecipeServiceService, private router: Router) { }

  openRecipe(id: string): void{
    this.recipeService.recipe.next(this.recipes.find(Recipe => Recipe._id == id) ?? new Recipe("", "",[], [], []));
    this.router.navigate(['/recipes', id]);
  }
}
