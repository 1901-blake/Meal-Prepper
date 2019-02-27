import { Recipe } from "../Model/Recipe";

export const favoriteTypes = {
    LOAD_FAVORITE_PLAN: 'LOAD_FAVORITE_PLAN',
}

export const favoritePlan = () => async (dispatch) => {
    // console.log('favoritePlan loading');

    // const resp = await fetch('http://localhost:5500/recipe');
    
    // console.log('resp in favoritePlan.action has a status of: ' + resp.status);

    // if (resp.status == 200) {

    //     const body = await resp.json();

    //     let temprecipe: Recipe[] = [];

    //     //loop through the array of recipes from body
    //     for (let index = 0; index < body.length; index++) {
    //         temprecipe[index] = new Recipe()
    //         temprecipe[index].recipe_id = body[index].id;
    //         temprecipe[index].name = body[index].name;
    //         temprecipe[index].description = body[index].description;
    //         temprecipe[index].instructions = body[index].instructions;
    //     }

    //     dispatch({

    //         payload: {
    //             favoriteRecipe: temprecipe
    //         },
    //         type: favoriteTypes.LOAD_FAVORITE_PLAN
    //     })
    // }


}
