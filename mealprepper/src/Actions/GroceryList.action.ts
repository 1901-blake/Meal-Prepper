import { Ingredient } from "../Model/Ingredient";
import { Ingredients } from "../Model/Ingredients";
import { Measure } from "../Model/Measure";
import { recipeClient } from "../Axios/recipe.client";


export const groceryTypes = {
    ADD_ROW: 'ADD_ROW',
    LOAD_ROW: 'LOAD_ROW'

}

export const loadGroceryRow = () => async (dispatch) => {
    console.log('loadGroceryRow action loading');
    const resp = await fetch('http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com:5500/recipeingredient');
    // recipeClient.
    const body = await resp.json();
    console.log('resp status in loadGroceryRow is ' + resp.status);

    if (resp.status == 200) {

        let tempingrdient : Ingredients[] = [];
        for (let index = 0; index < body.length; index++) {

            tempingrdient[index] = new Ingredients(body[index].measure, body[index].ingredient, body[index].amount);
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

export const addGroceryRow = (Ingredientname: string, amount: number) => (dispatch) => {

    let fullfillmeasure = new Measure(0, '');
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
