export class FullRecipe {
    id: number;
    name: string;
    description: string;
    instructions: string;
    amount: number;
    measure: string;
    ingredient: string;


    constructor(id: number, name: string, description: string, instructions: string,
        amount: number, measure: string, ingredient: string) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.instructions = instructions;
            this.measure = measure;
            this.amount = amount;
            this.ingredient = ingredient;
        }
}