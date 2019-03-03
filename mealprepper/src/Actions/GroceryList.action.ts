import { Ingredient } from "../Model/Ingredient";
import { Ingredients } from "../Model/Ingredients";
import { Measure } from "../Model/Measure";
import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";


export const groceryTypes = {
    ADD_ROW: 'ADD_ROW',
    LOAD_ROW: 'LOAD_ROW'

}

export const loadGroceryRow = (generate : FullRecipe[]) => async (dispatch) => {
    console.log('loadGroceryRow action loading');

    if (generate) {

        let tempingrdient : Ingredients[] = [];

        for (let index = 0; index < generate.length; index++) {

            for (let ingindex = 0; ingindex < generate[index].ingredients.length; ingindex++) {

                tempingrdient.push(new Ingredients(generate[index].ingredients[ingindex].measure, generate[index].ingredients[ingindex].ingredient,generate[index].ingredients[ingindex].amount));
            }
        }

        // tempingrdient.ingredient.name = body.value.joke;
        dispatch({

            payload: {
                Ingredientname: tempingrdient,
            },
            type: groceryTypes.LOAD_ROW
        })
    }

}

export const addGroceryRow = (Ingredientname: string, amount: number, measure: string) => (dispatch) => {

    let fullfillmeasure = new Measure(0, measure);
    let fullfillingredient = new Ingredient(0, Ingredientname);


    let tempingrdient = new Ingredients(fullfillmeasure, fullfillingredient, amount);
    console.log(tempingrdient.ingredient.name);
    dispatch({

        payload: {
            temo: tempingrdient,
        },
        type: groceryTypes.ADD_ROW
    })
}
