import { recipeClient } from "../Axios/recipe.client";

export const generateMealPlanTypes = {
    CREATE_RECIPE: 'GENERATE_MEAL_PLAN_RECIPE'
}

export const generateRecipes = () => async (dispatch) => {
    try {
        // http://ec2-18-221-233-241.us-east-2.compute.amazonaws.com:5500/meals/generate/5
        let newRecipe = await recipeClient.get('http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com:5500/recipe/generate/5');
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