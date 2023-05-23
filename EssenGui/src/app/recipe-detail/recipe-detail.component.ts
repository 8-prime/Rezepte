import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe';
import { RecipeServiceService } from '../recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe?: Recipe;
  loading: boolean = true;

  constructor(private recipeService: RecipeServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.recipeService.getRecipebyId(params['id']).subscribe( recipe => {
        this.recipe = recipe;
        this.loading = false;
      });
    })
  }

}
