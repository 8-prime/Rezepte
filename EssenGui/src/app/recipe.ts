export class Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
  
    constructor(id: number, name: string, ingredients: string[], instructions: string[]) {
      this.id = id;
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
    }
  
    getIngredients(): string[] {
      return this.ingredients;
    }
  
    getInstructions(): string[] {
      return this.instructions;
    }
  }