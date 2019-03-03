import { recipeClient } from "../Axios/recipe.client";
import { FullRecipe } from "../Model/FullRecipe";
import { Auth } from "aws-amplify";
import { IGenerateMealPlanState } from "../reducers";

export const generateMealPlanTypes = {
    SAVE_RECIPE: 'GENERATE_MEAL_PLAN_SAVE_RECIPE', 
    CREATE_BREAKFAST: 'GENERATE_MEAL_PLAN_CREATE_BREAKFAST',
    CREATE_LUNCH: 'GENERATE_MEAL_PLAN_CREATE_LUNCH',
    CREATE_DINNER: 'GENERATE_MEAL_PLAN_CREATE_DINNER',
    CREATE_DESSERT: 'GENERATE_MEAL_PLAN_CREATE_DESSERT'
}

export const generateBreakfast = () => async (dispatch) => {
    try {
        let newRecipe = await recipeClient.get('recipe/generate/7/{description}?description=breakfast');
        let recipe = newRecipe.data;
        dispatch({
            payload: {
                recipe: recipe
            }, 
            type: generateMealPlanTypes.CREATE_BREAKFAST
        })
    } catch (err) {
        console.log(err);
    }
}

export const generateLunch = () => async (dispatch) => {
    try {
        let newRecipe = await recipeClient.get('recipe/generate/7/{description}?description=lunch-dinner');
        let recipe = newRecipe.data;
        dispatch({
            payload: {
                recipe: recipe
            }, 
            type: generateMealPlanTypes.CREATE_LUNCH
        })
    } catch (err) {
        console.log(err);
    }
}

export const generateDinner = () => async (dispatch) => {
    try {
        let newRecipe = await recipeClient.get('recipe/generate/7/{description}?description=lunch-dinner');
        let recipe = newRecipe.data;
        dispatch({
            payload: {
                recipe: recipe
            }, 
            type: generateMealPlanTypes.CREATE_DINNER
        })
    } catch (err) {
        console.log(err);
    }
}

export const generateDessert = () => async (dispatch) => {
    try {
        let newRecipe = await recipeClient.get('recipe/generate/7/{description}?description=dessert');
        let recipe = newRecipe.data;
        dispatch({
            payload: {
                recipe: recipe
            }, 
            type: generateMealPlanTypes.CREATE_DESSERT
        })
    } catch (err) {
        console.log(err);
    }
}

export const saveRecipes = (event, recipes: IGenerateMealPlanState) => async (dispatch) => {
    try {
        event.preventDefault();
        const user = await Auth.currentAuthenticatedUser();
        const subkey = user.attributes.sub;
        let userWID = await recipeClient.get(`/users/subkey/${subkey}`);
        recipes.breakfast.forEach(element => async () => (
            await recipeClient.post('/users/history', {
                id: userWID.data[0].id, //userid,
                subkey: userWID.data[0].subkey, //subkey,
                ratinginfo: [{
                    recipe: element, 
                    rating: ""
                }],
            }).catch(err => console.log(err))
        ));
        recipes.lunch.forEach(element => async () => (
            await recipeClient.post('/users/history', {
                id: userWID.data[0].id, //userid,
                subkey: userWID.data[0].subkey, //subkey,
                ratinginfo: [{
                    recipe: element, 
                    rating: ""
                }],
            }).catch(err => console.log(err))
        ));
        recipes.dinner.forEach(element => async () => (
            await recipeClient.post('/users/history', {
                id: userWID.data[0].id, //userid,
                subkey: userWID.data[0].subkey, //subkey,
                ratinginfo: [{
                    recipe: element, 
                    rating: ""
                }],
            }).catch(err => console.log(err))
        ));
        recipes.dessert.forEach(element => async () => (
            await recipeClient.post('/users/history', {
                id: userWID.data[0].id, //userid,
                subkey: userWID.data[0].subkey, //subkey,
                ratinginfo: [{
                    recipe: element, 
                    rating: ""
                }],
            }).catch(err => console.log(err))
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