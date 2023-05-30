export class Category {
    _id: string;
    name: string;
    recipeIds: string[]

    constructor(_id: string, name: string, recipeIds: string[]) {
        this._id = _id;
        this.name = name;
        this.recipeIds = recipeIds;
    }
}