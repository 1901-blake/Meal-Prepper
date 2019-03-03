import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";
import { IGenerateMealPlanState } from "../reducers";

export const weeklyViewTypes = {
    LOAD_WEEK_PLAN: 'LOAD_WEEK_PLAN',
}

export const loadWeeklyPlan = (generate: IGenerateMealPlanState) => async (dispatch) => {
    try {

        const breakArr = generate.breakfast;
        const lunchArr = generate.lunch;
        const dinnerArr = generate.dinner;
        const dessertArr = generate.dessert;
        let temprecipe: FullRecipe[] = [];

        //loop through the array of recipes from body
        breakArr.forEach(element => (
            temprecipe.push(element)
        ));
        lunchArr.forEach(element => (
            temprecipe.push(element)
        ));
        dinnerArr.forEach(element => (
            temprecipe.push(element)
        ));
        dessertArr.forEach(element => (
            temprecipe.push(element)
        ));

        dispatch({
            payload: {
                weeklyrecipe: temprecipe
            },
            type: weeklyViewTypes.LOAD_WEEK_PLAN
        });

    } catch (err) {
        console.log(err);
    }
}
