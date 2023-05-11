import { ObjectId } from "mongodb";

export class Recipe {
    _id: ObjectId;
    name: string;
    ingredients: string[];
    instructions: string[];
    categoryIds: ObjectId[];
  
    constructor(_id: ObjectId, name: string, ingredients: string[], instructions: string[], categoryIds: ObjectId[]) {
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