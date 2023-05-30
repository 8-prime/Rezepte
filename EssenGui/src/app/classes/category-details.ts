import { Category } from "./category";
import { Recipe } from "./recipe";

export class CategoryDetails {
    category: Category
    recipes: Recipe[]

    constructor(category: Category, recipes: Recipe[]) {
        this.category = category;
        this.recipes = recipes;
    }
}
