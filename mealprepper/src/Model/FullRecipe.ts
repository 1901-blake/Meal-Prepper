import { Ingredients } from "./Ingredients";

export class FullRecipe {
    id: number;
    name: string;
    description: string;
    instructions: string;
    ingredients: Ingredients[];


    constructor(id: number, name: string, description: string, instructions: string,
        ingredients: Ingredients[]) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.instructions = instructions;
            this.ingredients = ingredients;
        }
}