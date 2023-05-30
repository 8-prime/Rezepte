import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/classes/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

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
    this.loading = true;
    this.route.params.subscribe(params => {
      this.recipeService.recipe.subscribe(rec => {
        this.recipe = rec

        if(this.recipe._id != params['id']){
          this.recipeService.getRecipebyId(params['id']).subscribe( recipe => {
            this.recipe = recipe;
            this.loading = false;
          });
        }else{
          this.loading = false;
        }
      });
      
    })
  }

}
