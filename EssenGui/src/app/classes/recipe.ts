export class Recipe {
    _id: string;
    name: string;
    ingredients: string[];
    instructions: string[];
    categoryIds: string[];
  
    constructor(_id: string, name: string, ingredients: string[], instructions: string[], categoryIds: string[]) {
      this._id = _id;
      this.name = name;
      this.ingredients = ingredients;
      this.instructions = instructions;
      this.categoryIds = categoryIds;
    }
  
    getIngredients(): string[] {
      return this.ingredients;
    }
  
    getInstructions(): string[] {
      return this.instructions;
    }
  }