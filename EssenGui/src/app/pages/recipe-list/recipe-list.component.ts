import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recipe } from 'src/app/classes/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];
  loading: boolean = true;

  constructor(private recipeService: RecipeServiceService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.recipes = recipes;
      this.loading = false;
    });
  }


  openRecipe(id: string): void{
    this.recipeService.recipe.next(this.recipes.find(Recipe => Recipe._id == id) ?? new Recipe("", "",[], [], []));
    this.router.navigate(['/recipes', id]);
  }

}
