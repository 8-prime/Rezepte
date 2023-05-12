import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.recipeService.getCategoryById(params['id']).subscribe(category => {
        console.log(category);
        this.category = category;
      });

      this.recipeService.getRecipesForCategory(params['id']).subscribe(recipes => {
        this.recipes = recipes;
      });
    });
  }

}
