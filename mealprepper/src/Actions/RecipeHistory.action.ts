import { Recipe } from "../Model/Recipe";

export const recipeHistoryTypes = {
    LOAD_RECIPE_HISTORY_ROW: 'LOAD_ROW'

}

export const loadrecipeHistoryRow = () => async (dispatch) => {



    let temprecipe : Recipe[] = [];
    const resp = await fetch('http://localhost:5500/recipe');
    console.log('resp has a status of: '+resp.status);

    const body = await resp.json();

    console.log('this is the body object value: '+ body +' find all length: '+body.length )
    for (let index = 0; index < 5; index++) {


    }

    dispatch({

        payload: {
            recipehis: temprecipe,
        },
        type: recipeHistoryTypes.LOAD_RECIPE_HISTORY_ROW
    })
}
