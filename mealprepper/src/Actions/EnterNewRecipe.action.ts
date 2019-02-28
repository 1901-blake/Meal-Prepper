import { Measure } from "../Model/Measure";
import { Ingredient } from "../Model/Ingredient";
import { Ingredients } from "../Model/Ingredients";
import { recipeClient } from "../Axios/recipe.client";

export const enterNewRecipeTypes = {
    ADD_INGREDIENT: 'ENTER_NEW_RECIPE_ADD_INGREDIENT', 
    SUBMIT_RECIPE: 'ENTER_NEW_RECIPE_SUBMIT_RECIPE',
    UPDATE_AMOUNT: 'ENTER_NEW_RECIPE_UPDATE_AMOUNT',
    UPDATE_MEASURE: 'ENTER_NEW_RECIPE_UPDATE_MEASURE', 
    UPDATE_INGREDIENT: 'ENTER_NEW_RECIPE_UPDATE_INGREDIENT', 
    UPDATE_RECIPE_NAME: 'ENTER_NEW_RECIPE_UPDATE_RECIPE_NAME',
    UPDATE_DESCRIPTION: 'ENTER_NEW_RECIPE_UPDATE_DESCRIPTION', 
    UPDATE_INSTRUCTIONS: 'ENTER_NEW_RECIPE_UPDATE_INSTRUCTIONS'
}

export const submitRecipe = (event, recipeName: string, description: string, instructions: string, ingredients: Ingredients[]) => async (dispatch) => {
    try {
        event.preventDefault();

        console.log(description, instructions, recipeName, ingredients);

        let recipe = await recipeClient.post('http://localhost:5500/recipe/createRecipe', {
            description: description,
            instructions: instructions, 
            name: recipeName, 
            ingredients: ingredients
        });
        
        console.log(recipe);

        dispatch({
            payload: {
                status: recipe.status
            }, 
            type: enterNewRecipeTypes.SUBMIT_RECIPE
        })

    } catch (err) {
        console.log(err);
        dispatch({
            payload: {
                status: 400
            }, 
            type: enterNewRecipeTypes.SUBMIT_RECIPE
        })
    }
}

export const addIngredient = (amount: number, measure: Measure, ingredient: Ingredient) => {
    console.log(measure);
    console.log(ingredient);
    return {        
        payload: {
            amount: amount, 
            measure: measure, 
            ingredient: ingredient
        }, 
        type: enterNewRecipeTypes.ADD_INGREDIENT
    }
}

export const updateAmount = (event) => {
    return {
        payload: {
            amount: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_AMOUNT
    }
}

export const updateMeasure = (event) => {
    return {
        payload: {
            measure: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_MEASURE
    }
}

export const updateIngredient = (event) => {
    return {
        payload: {
            ingredient: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_INGREDIENT
    }
}

export const updateRecipeName = (event) => {
    return {
        payload: {
            name: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_RECIPE_NAME
    }
}

export const updateDescription = (event) => {
    return {
        payload: {
            description: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_DESCRIPTION
    }
}

export const updateInstructions = (event) => {
    return {
        payload: {
            instructions: event.target.value
        }, 
        type: enterNewRecipeTypes.UPDATE_INSTRUCTIONS
    }
}
