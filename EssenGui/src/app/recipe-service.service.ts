import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Recipe } from './recipe';
import { Category } from './category';
import { Observable } from 'rxjs/internal/Observable';
import { ObjectId } from "mongodb";

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]>{
      return this.http.get<Category[]>('http://localhost:3000/categories/')
  }


  getRecipebyId(id: number): Recipe{
    const recipeId = id; // Generate a random ID between 0 and 999
    const recipeName = `Random Recipe ${recipeId}`; // Use the ID to create a unique recipe name
  
    const ingredientNames = ['flour', 'sugar', 'butter', 'eggs', 'milk', 'salt', 'baking powder', 'vanilla extract', 'chocolate chips']; // List of ingredient names
    const ingredients = []; // Array to hold the recipe's ingredients
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * ingredientNames.length); // Get a random index from the list of ingredient names
      const ingredientName = ingredientNames[randomIndex]; // Get the ingredient name at the random index
      ingredients.push(ingredientName); // Add the ingredient name to the recipe's list of ingredients
    }
  
    const instructions = [`Preheat the oven to ${Math.floor(Math.random() * 50) + 150}°C.`]; // Start with a random instruction
    const instructionTemplates = ['Mix {{ingredient1}} and {{ingredient2}} together.', 'Add {{ingredient}} to the mixture.', 'Bake for {{time}} minutes.']; // List of instruction templates
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * instructionTemplates.length); // Get a random index from the list of instruction templates
      let instruction = instructionTemplates[randomIndex]; // Get the instruction template at the random index
      instruction = instruction.replace('{{ingredient1}}', ingredients[Math.floor(Math.random() * ingredients.length)]); // Replace the {{ingredient1}} placeholder with a random ingredient
      instruction = instruction.replace('{{ingredient2}}', ingredients[Math.floor(Math.random() * ingredients.length)]); // Replace the {{ingredient2}} placeholder with a different random ingredient
      instruction = instruction.replace('{{ingredient}}', ingredients[Math.floor(Math.random() * ingredients.length)]); // Replace the {{ingredient}} placeholder with a random ingredient
      instruction = instruction.replace('{{time}}', `${Math.floor(Math.random() * 20) + 10}`); // Replace the {{time}} placeholder with a random baking time
      instructions.push(instruction); // Add the instruction to the recipe's list of instructions
    }
  
    return new Recipe(new ObjectId(recipeId), recipeName, ingredients, instructions, []);
  }
}
