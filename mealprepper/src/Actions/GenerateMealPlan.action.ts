import { recipeClient } from "../Axios/recipe.client";

export const generateMealPlanTypes = {
    CREATE_RECIPE: 'GENERATE_MEAL_PLAN_RECIPE'
}

export const generateRecipes = () => async (dispatch) => {
    try {
        let newRecipe = await recipeClient.get('http://localhost:5500/full_recipe');
        let recipe = newRecipe.data;
        console.log(recipe);
        dispatch({
            payload: {
                recipe: recipe
            }, 
            type: generateMealPlanTypes.CREATE_RECIPE
        })
    } catch (err) {
        console.log(err);
    }
}