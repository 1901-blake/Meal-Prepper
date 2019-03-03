import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";
import { Auth } from "aws-amplify";

export const generateMealPlanTypes = {
    CREATE_RECIPE: 'GENERATE_MEAL_PLAN_RECIPE', 
    SAVE_RECIPE: 'GENERATE_MEAL_PLAN_SAVE_RECIPE'
}

export const generateRecipes = () => async (dispatch) => {
    try {
        let newRecipe = await recipeClient.get('recipe/generate/5');
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

export const saveRecipes = (event, recipes: FullRecipe[]) => async (dispatch) => {
    try {
        event.preventDefault();
        const user = await Auth.currentAuthenticatedUser();
        const subkey = user.attributes.sub;
        let userWID = await recipeClient.get(`/users/subkey/${subkey}`);
        recipes.forEach(element => async () => (
            await recipeClient.post('/users/history', {
                id: userWID.data[0].id, //userid,
                subkey: userWID.data[0].subkey, //subkey,
                ratinginfo: [{
                    recipe: element, 
                    rating: ""
                }],
            })
        ));

        dispatch({
            payload: {
                status: 'Successful!'
            }, 
            type: generateMealPlanTypes.SAVE_RECIPE
        })
    } catch (err) {
        console.log(err);
        dispatch({
            payload: {
                status: 'Unsuccessful!'
            }, 
            type: generateMealPlanTypes.SAVE_RECIPE
        })
    }
}