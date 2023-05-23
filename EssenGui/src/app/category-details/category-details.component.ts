import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent {

  category: Category = new Category('','',[]);
  recipes: Recipe[] = [];

  loadingCat: boolean = true;
  loadingRec: boolean = true;
  

  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.recipeService.getCategoryById(params['id']).subscribe(category => {
        console.log(category);
        this.category = category;
        this.loadingCat = false;
      });

      this.recipeService.getRecipesForCategory(params['id']).subscribe(recipes => {
        this.recipes = recipes;
        this.loadingRec = false;
      });
    });
  }

  openRecipe(id: string): void{
    this.recipeService.recipe.next(this.recipes.find(Recipe => Recipe._id == id) ?? new Recipe("", "",[], [], []));
    this.router.navigate(['/recipes', id]);
  }

}
