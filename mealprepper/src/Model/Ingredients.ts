import { Measure } from "./Measure";
import { Ingredient } from "./Ingredient";

export class Ingredients {
    measure: Measure;
    ingredient: Ingredient;
    amount: number
  
    constructor(measure: Measure, ingredient: Ingredient, amount: number) {
      this.measure = measure, 
      this.ingredient = ingredient, 
      this.amount = amount
    }
  }