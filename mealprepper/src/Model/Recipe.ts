import { Ingredients } from "./Ingredient";

export class Recipe {
    recipe_id : number; // database name is recipe_id
    name : string;// database name is name
    description : string;// database name is description
    instructions : string;// database name is instructions


    constructor(recipe_id = 0,name = '',description = '',instructions = '') {
        this.recipe_id = recipe_id;
        this.name = name;
        this.description = description;
        this.instructions = instructions;
    }
}