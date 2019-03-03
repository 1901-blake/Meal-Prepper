import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";

export const weeklyViewTypes = {
    LOAD_WEEK_PLAN: 'LOAD_WEEK_PLAN',
}

export const loadWeeklyPlan = (amount: number) => async (dispatch) => {
    try {
        const resp = await recipeClient.get('recipe');

        if (resp.status == 200) {

            const body = await resp.data;
            let temprecipe: FullRecipe[] = [];

            //loop through the array of recipes from body
            for (let index = 0; index < body.length; index++) {
                temprecipe[index] = new FullRecipe(
                    body[index].id, 
                    body[index].name, 
                    body[index].description, 
                    body[index].instructions,
                    body[index].ingredients
                    );
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
