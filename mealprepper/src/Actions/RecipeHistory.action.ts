import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";
import { Auth } from "aws-amplify";

export const recipeHistoryTypes = {
    LOAD_RECIPE_HISTORY_ROW: 'LOAD_RECIPE_HISTORY_ROW'

}

export const loadrecipeHistoryRow = () => async (dispatch) => {

    try {
        const user = await Auth.currentAuthenticatedUser();
        const subkey = user.attributes.sub;
        let temprecipe: FullRecipe[] = [];

        console.log('loadrecipeHistoryRow action loading');
        const resp = await recipeClient.get('users');
        console.log('resp has a status of: ' + resp.status);

        if (resp.status == 200) {

            const body = await resp.data;

            console.log(body[0].ratinginfo);

            body.forEach(element => {
                if (element.subkey === subkey) {

                    for (let index = 0; index < element.ratinginfo.length; index++) {
                        const temp = new FullRecipe(element.ratinginfo[index].recipe.id, element.ratinginfo[index].recipe.name, 
                            element.ratinginfo[index].recipe.description, element.ratinginfo[index].recipe.instructions, 
                            element.ratinginfo[index].recipe.ingredients);
                        temprecipe.push(temp);
                    }

                }
            });
            
            dispatch({
                payload: {
                    recipehis: temprecipe,
                },
                type: recipeHistoryTypes.LOAD_RECIPE_HISTORY_ROW
            });
        }
    } catch (err) {
        console.log(err);
    }
}
