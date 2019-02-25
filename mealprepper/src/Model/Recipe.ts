import { Ingredients } from "./Ingredient";

export class Recipe {
    id : number;
    name : string;
    description : string;
    arrayingredient : Ingredients[];


    constructor(id = 0,name = '',description = '',arrayingredient = []) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.arrayingredient = arrayingredient;
    }
}