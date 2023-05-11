import { ObjectId } from "mongodb";

export class Category {
    _id: ObjectId;
    name: string;
    recipeIds: ObjectId[]

    constructor(_id: ObjectId, name: string, recipeIds: ObjectId[]) {
        this._id = _id;
        this.name = name;
        this.recipeIds = recipeIds
    }
}