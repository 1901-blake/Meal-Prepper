import { Recipe } from "../Model/Recipe";
import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";

export const recipeHistoryTypes = {
    LOAD_RECIPE_HISTORY_ROW: 'LOAD_RECIPE_HISTORY_ROW'

}

export const loadrecipeHistoryRow = () => async (dispatch) => {

    try {
        const tempuser = 0;

        console.log('loadrecipeHistoryRow action loading');
        const resp = await recipeClient.get('recipe');
        console.log('resp has a status of: ' + resp.status);

        if (resp.status == 200) {

            const body = await resp.data;

            let temprecipe: Recipe[] = [];

            for (let index = 0; index < body.length; index++) {

                if (body[index].id == tempuser) {
                    temprecipe[index] = new Recipe();
                    temprecipe[index].recipe_id = body[index].id;
                    temprecipe[index].name = body[index].name;
                    temprecipe[index].description = body[index].description;
                    temprecipe[index].instructions = body[index].instructions;
                }
                else if (tempuser == 0) {
                    temprecipe[index] = new Recipe(body[index].id, body[index].name, body[index].description, body[index].instructions);
                }
                else {

                }

            }
            dispatch({

                payload: {
                    recipehis: temprecipe,
                },
                type: recipeHistoryTypes.LOAD_RECIPE_HISTORY_ROW
            })

        }
    } catch (err) {
        console.log(err);
    }
}
