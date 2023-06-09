import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/classes/category';
import { Recipe } from 'src/app/classes/recipe';
import { RecipeServiceService } from 'src/app/services/recipe-service.service';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  recipe: Recipe = new Recipe('', '', [], [], []);
  categories: Category[] = [];

  recipes: Recipe[] = [];

  showModal = false;
  modalText = "";

  loading: boolean = true;
  loadRecipes: boolean = true;
  loggedIn: boolean = false;

  password: string = '';

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

  login(): void {
    this.loggedIn = this.recipeService.login(this.password);
  }

  // Function to open the modal
  openModal(): void {
    this.showModal = true;
  }

  // Function to close the modal
  closeModal(result: boolean): void {
    this.showModal = false;
    this.recipe = new Recipe("","",[],[],[]);

    if(result){
      this.loadRecipes = true;
      this.recipeService.getRecipes().subscribe(recipes => {
        this.recipes = recipes;
        this.loadRecipes = false;
      })
    }
  }

  add(){
    this.modalText = "Add recipe";
    this.showModal = true;
  }


  edit(recipe:Recipe){
    this.recipe = recipe;
    this.modalText = "Edit";
    this.openModal();
  }

  delete(recipe:Recipe){
    console.log("Removing Data");
    
    this.recipeService.deleteRecipe(recipe._id).subscribe(_ => {
      this.recipes = this.recipes.filter(obj => obj._id !== recipe._id);
    });
  }

}
