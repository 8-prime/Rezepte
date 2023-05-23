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

  test: Category[] = [new Category("test", "Hallo", []), new Category("trest1", "Lecker", []), new Category("sdfgsdf", "Muschi", [])];
  test1: number[] = [1,23324,4,34,5,34,5,345]

  result: Recipe = new Recipe('', '', [], [], []);


  loading: boolean = true;

  constructor(private recipeService: RecipeServiceService){}


  ngOnInit(): void{
    this.loading = true;
    this.recipeService.getCategories().subscribe(cats => {
      this.categories = cats;
      this.loading = false;
      console.log(this.categories);
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
