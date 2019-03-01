import { Recipe } from "../Model/Recipe";
import { recipeClient } from "../Axios/recipe.client";

export const weeklyViewTypes = {
    LOAD_WEEK_PLAN: 'LOAD_WEEK_PLAN',
}

export const loadWeeklyPlan = (amount: number) => async (dispatch) => {
    try {
        console.log('loadWeeklyPlan loading');
        const resp = await recipeClient.get('recipe');

        console.log('resp in loadWeeklyPlan.action has a status of: ' + resp.status);

        if (resp.status == 200) {

            const body = await resp.data;

            let temprecipe: Recipe[] = [];

            //loop through the array of recipes from body
            for (let index = 0; index < body.length; index++) {
                temprecipe[index] = new Recipe();
                temprecipe[index].recipe_id = body[index].id;
                temprecipe[index].name = body[index].name;
                temprecipe[index].description = body[index].description;
                temprecipe[index].instructions = body[index].instructions;
            }

            dispatch({

                payload: {
                    weeklyrecipe: temprecipe
                },
                type: weeklyViewTypes.LOAD_WEEK_PLAN
            })
        }

    } catch (err) {
        console.log(err);
    }


}
