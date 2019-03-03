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
    UPDATE_INSTRUCTIONS: 'ENTER_NEW_RECIPE_UPDATE_INSTRUCTIONS', 
    POPULATE_INGREDIENT: 'ENTER_NEW_RECIPE_POPULATE_INGREDIENT', 
    POPULATE_MEASUREMENT: 'ENTER_NEW_RECIPE_POPULATE_MEASUREMENT',
    REMOVE_INGREDIENT: 'ENTER_NEW_RECIPE_REMOVE_INGREDIENT'
}

export const submitRecipe = (event, recipeName: string, description: string, instructions: string, ingredients: Ingredients[]) => async (dispatch) => {
    try {
        event.preventDefault();

        console.log(description, instructions, recipeName, ingredients);

        // http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com
        let recipe = await recipeClient.post('recipe/createRecipe', {
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

export const populateIngredient = () => async (dispatch) => {
    try {
        let ingred = await recipeClient.get('ingredient');
        let list = ingred.data;
        console.log(list);

        dispatch({
            payload: {
                ingredientPop: list
            }, 
            type: enterNewRecipeTypes.POPULATE_INGREDIENT
        })
    } catch (err) {
        console.log(err);
    }
}

export const populateMeasure = () => async (dispatch) => {
    try {
        // http://ec2-18-225-37-190.us-east-2.compute.amazonaws.com
        let measure = await recipeClient.get('measure');
        let list = measure.data;
        console.log(list);

        dispatch({
            payload: {
                measurePop: list
            }, 
            type: enterNewRecipeTypes.POPULATE_MEASUREMENT
        })
    } catch (err) {
        console.log(err);
    }
}

export const addIngredient = (amount: number, measure: Measure, ingredient: Ingredient) => {
    return {        
        payload: {
            amount: amount, 
            measure: measure, 
            ingredient: ingredient
        }, 
        type: enterNewRecipeTypes.ADD_INGREDIENT
    }
}

export const removeIngredient = (ingarr: Ingredients[], rowIndex: number) => {
    ingarr.splice(rowIndex,1);
    console.log(ingarr);
    return {        
        payload: {
            ingarr: ingarr
        }, 
        type: enterNewRecipeTypes.REMOVE_INGREDIENT
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
